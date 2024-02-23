import { auth } from '@/shared/firebase/firebaseapi';
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'

const Signup = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    useEffect(() => {
        import("preline");
        
    }, []);
    
    
      const [err, setError] = useState("");
      const [loading, setLoader] = useState(false);
      const [data, setData] = useState({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
      });
      const { email, password } = data;
      const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
      };
      const Login = (e) => {
        setLoader(true);
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
          user => { RouteChange(); setLoader(false); }).catch(err => { setError(err.message); setLoader(false); });
      };
    
      const Login1 = (e) => {
        setLoader(true);
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
          user => { RouteChange(); setLoader(false); }).catch(err => { setError(err.message); setLoader(false); });
      };
    
      let navigate = useRouter();
      const RouteChange = () => {
        let path = "/components/dashboards/crm/";
        navigate.push(path);
      };
    
      let loader = <div role="status"> <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg><span className="sr-only">Loading...</span></div>;

      
  return (
    <Fragment>
        <Seo title={"Signup-basic"}/>
       <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
            <div className="grid grid-cols-12">
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                    <div className="my-[2.5rem] flex justify-center">
                        <Link href="/components/dashboards/crm/">
                            <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
                            <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/>
                        </Link>
                    </div>
                    <div className="box">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 font-semibold mb-2 text-center">Sign Up</p>
                            <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome &amp; Join us by
                                creating a free account !</p>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">First Name</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-firstname" placeholder="first name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Last Name</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="last name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-password" className="form-label text-default">Password</label>
                                    <div className="input-group">
                                        <input type={(passwordshow1) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-password" placeholder="password"/>
                                        <button onClick={()=>setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm
                                        Password</label>
                                    <div className="input-group">
                                        <input type={(passwordshow2) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-confirmpassword" placeholder="confirm password"/>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           onClick={()=>setpasswordshow2(!passwordshow2)}
                                            id="button-addon21"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                    <div className="mt-4">
                                        <div className="form-check !flex !ps-0">
                                            <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="ps-2 form-check-label text-[#8c9097] dark:text-white/50 font-normal block" htmlFor="defaultCheck1">
                                                By creating a account you agree to our <Link href="/components/pages/terms&conditions/"
                                                className="text-success"><u>Terms &amp; Conditions</u></Link> and <Link href="#!"
                                                className="text-success"><u>Privacy Policy</u></Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <button type="button" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Create
                                        Account</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p onClick={Login} className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Already have an account? <Link 
                                        href="/components/authentication/sign-in/signin-basic/" className="text-primary">Sign In</Link></p>
                            </div>
                            <div className="text-center my-4 authentication-barrier">
                                <span>OR</span>
                            </div>
                            <div className="btn-list text-center">
                                <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                    <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
                                <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                    <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
                                <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light">
                                    <i className="ri-twitter-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}


export default Signup