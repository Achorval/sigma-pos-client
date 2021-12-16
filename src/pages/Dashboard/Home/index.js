import React, { useState, useEffect } from 'react';
import Qrcode from 'qrcode';
import { useDispatch } from 'react-redux';
import qrCode from '../../../core/assets/images/qrCode.svg';
import empty from '../../../core/assets/images/svg/icons/General/Empty.svg';
import SVG from 'react-inlinesvg';
import { Modal,ModalHeader,ModalBody } from 'reactstrap';
import * as actions from "../../../redux/actions/UserActions";
import { 
  Card,
  Table,
} from 'reactstrap';

export default function Dashboard() { 
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState('');
  const dispatch = useDispatch();

  const toggle = () => setShow(!show);

  useEffect(() => {
    fetchCustomers();
    fetchTransactions();
  }, [dispatch]);

  const fetchCustomers = () => {
    actions.fetchCustomers()
      .then(({data}) => {
        setCustomers(data.data)
      });
  };

  const fetchTransactions = () => {
    actions.fetchTransactions()
      .then(({data}) => {
        setTransactions(data.data)
      });
  };
  console.log(src);
  
  const toggleQrcode = (id) => {
    Qrcode.toDataURL(window.location.origin+'/customer/'+id).then((data) => {
      toggle();
      setSrc(data)
    });
  };

  const checkStatus = (key) => {
    switch (key) {
      case 'Pending':
        return <span className="text-warning badge badge-neutral-warning">Pending</span>
        break;
      case 'Success':
        return <span className="text-success badge badge-neutral-success">Successful</span>
        break;
      case 'Rejected':
        return <span className="text-danger badge badge-neutral-danger">Failed</span>
        break;
      case 'Processing':
        return <span className="text-success badge badge-neutral-primary">Processing</span>
        break;
      case 'Failed':
        return <span className="text-danger badge badge-neutral-danger">Failed</span>
        break;
      default:
        break;
    }
  };
  let sn = 1;
  return (<>
    <Card className="card-box shadow-none mb-5">
      <div className="d-flex justify-content-between px-4 py-3">
        <div className="">Customers</div>
      </div>
      <div className="divider" />
      <div className="p-4">
        {Array.isArray(customers) && customers.length > 0 ? 
          <div className="table-responsive-md">
            <Table className="table-alternate-spaced mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="pb-4 text-center">
                    SN
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark text-center"
                    scope="col">
                    Name
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark text-center"
                    scope="col">
                    QR Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map(n => 
                  <tr key={n.id}>
                    <td className="text-center">
                      <span className="font-weight-bold">{sn++}</span>
                    </td>
                    <td className='text-center'>
                      <span className="font-weight-bold text-black">
                        {n.firstname+' '+n.lastname}
                      </span>
                    </td>
                    <td className='text-center'>
                      <img
                        alt="..."
                        className="hover-scale-lg rounded-sm"
                        src={qrCode}
                        style={{ width: 90, cursor: 'pointer' }}
                        onClick={() => toggleQrcode(n.id)}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          :
          <div className="text-center p-4 p-lg-5">
            <div className="avatar-icon-wrapper rounded-circle m-0">
              <div className="d-inline-flex justify-content-center text-warning d-70">
                <SVG src={empty} />
              </div>
            </div>
            <p className="font-weight-bold font-size-sm line-height-sm m-auto text-black-50 px-4" 
            style={{maxWidth:'374px',lineHeight: '1.3em'}}>
              Your most recent customers will show up here.
            </p>
          </div>
        }
      </div>
    </Card>
    
    <div className="card rounded-lg bg-secondary shadow-xxl">
      <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
        <h1 className="font-weight-bold font-size-xl mb-1 text-dark">
          Recent Transactions
        </h1>
      </div>
      <div className="divider" />
      <div className="divider" />
      <div className="p-4 no-gutters">
        {Array.isArray(transactions) && transactions.length > 0 ? 
          <div className="table-responsive-md">
            <table className="text-nowrap mb-0 table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="bg-white text-left">SN</th>
                  <th className="bg-white text-center">Date</th>
                  <th className="bg-white text-center">Customer</th>
                  <th className="bg-white text-center">Reference</th>
                  <th className="bg-white text-center">Amount</th>
                  <th className="bg-white text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(n => 
                <tr key={n.id}>
                  <td className="font-weight-bold">{sn++}</td>
                  <td className="text-center text-black-50">{n.createdAt}</td>
                  <td className="text-center text-black-50">{n.customer.firstname+' '+n.customer.lastname}</td>
                  <td  className="text-center text-black-50">{n.reference}</td>
                  <td className="text-center text-black-50">{`₦`+n.amount}</td>
                  <td className="text-center">{checkStatus(n.status)}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        : 
          <div className="text-center p-4 p-lg-5">
            <div className="avatar-icon-wrapper rounded-circle m-0">
              <div className="d-inline-flex justify-content-center text-warning d-70">
                <SVG src={empty} />
              </div>
            </div>
            <p className="font-weight-bold font-size-sm line-height-sm m-auto text-black-50 px-4" 
            style={{maxWidth:'374px',lineHeight: '1.3em'}}>
              Your most recent transactions will show up here when you start transacting.
            </p>
          </div>
        }
      </div>
    </div>
    
    {show && (
    <Modal zIndex={2000} centered scrollable isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>Scan Qrcode</ModalHeader>
      <ModalBody className="d-flex align-items-center">
        <img
          alt="..."
          className="rounded-sm"
          src={src}
          style={{ width: '100%', height:'100%', cursor: 'pointer' }}
          onClick={() => toggle()}
        />
      </ModalBody>
    </Modal>)}
  </>);
}
