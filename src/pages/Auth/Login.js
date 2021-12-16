import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import Show from '../../core/assets/images/svg/icons/General/Show.svg';
import Hide from '../../core/assets/images/svg/icons/General/Hide.svg';
import * as actions from '../../redux/actions/UserActions';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Username is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  })
  
  const initialValues = {
    username: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      actions.login(values.username, values.password)
        .then(({data: {data}}) => {
          setLoading(false);
          dispatch(actions.fulfillUser(data.user));
          dispatch(actions.fulfillToken(data.token));
        })
        .catch(() => {
          setLoading(false)
          setSubmitting(false)
          setStatus('The login detail is incorrect')
        });
    },
  });

  return (
    <div className="app-wrapper bg-white min-vh-100">
      <div className="app-main min-vh-100">
        <div className="app-content p-0">
          <div className="app-content--inner d-flex align-items-center">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div className="bg-composed-wrapper--content py-5">
                <div className="col-md-10 col-lg-8 col-xl-5 mx-auto">
                  <div className="d-flex justify-content-center align-items-center py-5">
                    <Link to='/' className='mb-12'>
                      <span className='text-dark font-weight-bold' style={{fontSize: '50px'}}>POS</span>
                    </Link>
                  </div>
                  <form onSubmit={formik.handleSubmit} noValidate>
                    <div className="text-center mb-3">
                      <h1 className="display-4 mb-2 font-weight-bold">Login to your account</h1>
                      <p className="font-size-lg text-black-50">
                        Fill in the fields below to login to your account
                      </p>
                    </div>
                    {formik.status && (
                      <div className='mb-lg-15 alert alert-danger'>
                        <div className='alert-text font-weight-bold'>{formik.status}</div>
                      </div>
                    )}
                    <div className="form-group">
                      <label className="font-weight-bold">Email or Phone Number</label>
                      <input placeholder='Email of Phone Number' type='text' {...formik.getFieldProps('username')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.username && formik.errors.username}
                      )}
                      />
                      {formik.touched.username && formik.errors.username && (
                        <div className='invalid-feedback'>
                            <span role='alert'>{formik.errors.username}</span>
                        </div>
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <div className="d-flex justify-content-between">
                        <label className="font-weight-bold">
                          Password
                        </label>
                        <Link to="/auth/recover">Forgot password?</Link>
                      </div>
                      <div className="input-group"> 
                        <input placeholder='Enter your password' type={passwordShown ? "text" : "password"}  {...formik.getFieldProps('password')}
                        className={clsx(
                          'form-control',
                          {'is-invalid': formik.touched.password && formik.errors.password}
                        )}/>
                        <div className="w-auto input-group-append">
                          {passwordShown ? (
                            <span className="input-group-text cursor-pointer" onClick={()=>togglePassword()}>
                              <SVG src={Show} />
                            </span>
                          ) : (
                            <div className="input-group-text cursor-pointer" onClick={()=>togglePassword()}>
                              <SVG src={Hide}/>
                            </div>
                          )}
                        </div>
                      </div>
                      {formik.touched.password && formik.errors.password && (
                        <div className='invalid-feedback'>
                          <span role='alert'>{formik.errors.password}</span>
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-custom btn-block text-uppercase font-weight-bold font-size-sm" disabled={formik.isSubmitting}>
                      {!loading && <span>Sign in</span>}
                      {loading && (
                      <span style={{display: 'block'}}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>)}
                    </button>
                    <div className="text-center pt-4 text-black-50">
                      Don't have an account? {` `} <Link to="/auth/register">Create an Account</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}