
import { basePath } from "@/next.config";
import { auth } from "@/shared/firebase/firebaseapi";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";

const Firebaselogin = () => {

  useEffect(() => {
    import("preline");
    
}, []);

  const [passwordshow1, setpasswordshow1] = useState(false);

  const [err, setError] = useState("");
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
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => {console.log(user); RouteChange();}).catch(err => {setError(err.message);});
  };

  const Login1 = (e) => {
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
      RouteChange();
  }
  else {
      setError("The Auction details did not Match");
      setData({
          "email": "adminnextjs@gmail.com",
          "password": "1234567890",
      });
  }
  };

  let navigate = useRouter();
  const RouteChange = () => {
    let path = "/components/dashboards/crm/";
    navigate.push(path);
  };

  let loader = <div role="status"> <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg><span className="sr-only">Loading...</span></div>;

  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2.5rem] flex justify-center">
                <Link href="/components/dashboards/crm/">
                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                </Link>
              </div>
             
              <div className="box !p-[3rem]">
                <nav className="!block px-6  mx-auto firebase-data" aria-label="Tabs">
                  <div className="flex justify-center space-x-2 bg-light p-2 rounded-md rtl:space-x-reverse">
                   
                    <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white active" id="pills-with-brand-color-item-1" data-hs-tab="#pills-with-brand-color-01" aria-controls="pills-with-brand-color-01">
                      <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjs.png`} alt="user-img" className="avatar avatar-sm w-6 h-6 rounded-full ring-0" />
                    </button>
                    <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white" id="pills-with-brand-color-item-2" data-hs-tab="#pills-with-brand-color-02" aria-controls="pills-with-brand-color-02">
                      <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/firbase.png`} alt="user-img" className="avatar avatar-sm w-6 h-6 rounded-full ring-0" />
                    </button>
                  </div>
                </nav>
                
                <div className="box-body" role="tabpanel"  id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                
                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                  {err &&  <div className="p-4 mb-4 bg-danger/40 text-sm  border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {err}
</div>}
                  
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon !</p>
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="signin-email" className="form-label text-default">Email</label>
                      <input type="text" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email}/>
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label htmlFor="signin-password" className="form-label text-default block">Password<Link href="/components/authentication/reset-password/reset-basic/" className="float-right text-danger">Forget password ?</Link></label>
                      <div className="input-group">
                        <input name="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} className="form-control form-control-lg !rounded-s-md" id="signin-password" placeholder="password" />
                        <button onClick={() => setpasswordshow1(!passwordshow1)} aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                      </div>
                      <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                          <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-2">
                      <Link onClick={Login1} href="#!" className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">Sign In</Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link href="/signup/" className="text-primary">Sign Up</Link></p>
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
                <div className="box-body hidden" role="tabpanel"  id="pills-with-brand-color-02" aria-labelledby="pills-with-brand-color-item-2">
                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                  {err &&  <div className="p-4 mb-4 bg-danger/40 text-sm  border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {err}
</div>}
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon !</p>
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="signin-email" className="form-label text-default">Email</label>
                      <input type="email" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email} placeholder="Email" />
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label htmlFor="signin-password" className="form-label text-default block">Password<Link href="/components/authentication/reset-password/reset-basic/" className="float-right text-danger">Forget password ?</Link></label>
                      <div className="input-group">
                        <input name="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} className="form-control form-control-lg !rounded-s-md" id="signin-password" placeholder="password" />
                        <button onClick={() => setpasswordshow1(!passwordshow1)} aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                      </div>
                      <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                          <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-2">
                      <Link onClick={Login} href="#!" className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">Sign In</Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link href="/signup/" className="text-primary">Sign Up</Link></p>
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
  );
};

export default Firebaselogin;
