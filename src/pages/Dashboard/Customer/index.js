import React,{useState,useEffect} from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import Qrcode from 'qrcode';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import { toast, Zoom } from 'react-toastify';
import { Card } from 'reactstrap';
import * as actions from '../../../redux/actions/UserActions';
import { useHistory, useLocation } from "react-router-dom";

export default function Customer({match}) {
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState('');
  const [src, setSrc] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    actions.verifyCustomer(match.params.id)
      .then(({data}) => {
        if (data.data !== null) {
          setCustomer(data.data);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [dispatch]);

  useEffect(() => {
    Qrcode.toDataURL('text').then((data) => {
      setSrc(data)
    });
  }, [dispatch]);

  const customerSchema = Yup.object().shape({
    amount: Yup.string()
      .required('Amount is required'),
    pin: Yup.string()
      .min(4, 'Minimum 4 symbols')
      .max(4, 'Maximum 4 symbols')
      .required('Pin is required')
  });

  const formik = useFormik({
    initialValues: {
      amount: '',
      pin: ''
    },
    validationSchema: customerSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      actions.processPayment({
        amount: values.amount, 
        pin: values.pin, 
        customer: match.params.id
      })
      .then(({data}) => {
        console.log(data);
        setLoading(false);
        history.push("/dashboard");
        toast.success(data.message, {
          containerId: 'B',
          transition: Zoom
        });
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setSubmitting(false);
          setStatus(error.response.data.message);
        }
      })
    }
  });

  return (
    <>
      {customer !== '' && 
        <Card className="card-box mb-5">
          <div className="pt-4">
            <div className='text-center'>
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="hover-scale-lg img-fluid" src={src} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">
                {customer.firstname + ' '+ customer.lastname}
              </h3>
              <p className="mb-0 text-black-50">
                {customer.email} <br />
                <b>{customer.phone}</b>
              </p>
            </div>
            <div className="card-footer bg-secondary p-4 mt-4">
              <form onSubmit={formik.handleSubmit} noValidate>
                {formik.status && (
                  <div className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                  </div>
                )}
                <div className="form-group">
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="font-weight-bold">Amount</label>
                  </div>
                  <input placeholder='Amount' type='text' {...formik.getFieldProps('amount')}
                    className={clsx(
                      'form-control',
                      {'is-invalid': formik.touched.amount && formik.errors.amount}
                    )}
                  />
                  {formik.touched.amount && formik.errors.amount && (
                    <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.amount}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="font-weight-bold">Pin</label>
                  </div>
                  <input placeholder='Pin' type='text' {...formik.getFieldProps('pin')}
                    className={clsx(
                      'form-control',
                      {'is-invalid': formik.touched.pin && formik.errors.pin}
                    )}
                  />
                  {formik.touched.pin && formik.errors.pin && (
                    <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.pin}</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    color="primary"
                    className="btn btn-lg btn-block text-uppercase btn-custom font-weight-bold font-size-sm my-3" disabled={formik.isSubmitting || !formik.isValid}>
                    {!loading && <span>Process Transaction</span>}
                    {loading && (
                    <span style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      }
    </>
  );
}
