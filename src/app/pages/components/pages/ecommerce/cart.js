import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { AddToCart } from "../../../../shared/redux/action"
import { ItemData1 } from '@/shared/data/pages/ecommerces/ecommercedata';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Cart = ({ local_varaiable }) => {

    const [cart, setCart] = useState(ItemData1);

    const [Price, setPrice] = useState(0);

    useEffect(() => {
        if (local_varaiable.ecommercedata == undefined) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else if (local_varaiable.ecommercedata.length == 0) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else {
            setCart(local_varaiable.ecommercedata);
            local_varaiable.ecommercedata.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }

    }, [local_varaiable.ecommercedata]);

    const handleClick = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id) => {
        const updatedData = cart.filter((idx) => idx.id !== id);
        setCart(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };



    const incrementQuantity = (id) => {
        console.log("Working incrementQuantity");

        const updatedCart = cart.map(item => {
            if (item.id === id) {

                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const decrementQuantity = (id) => {
        console.log("Working decrementQuantity");


        const updatedCart = cart.map(item => {
            if (item.id === id && innerWidth && item.quantity > 0) {

                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });


        setCart(updatedCart);
    };
    return (
        <Fragment>
            <Seo title={"Cart"} />
            <Pageheader currentpage="Cart" activepage="Ecommerce" mainpage="Cart" />
            <div className="grid grid-cols-12 sm:gap-x-6 gap-0">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="box" id="cart-container-delete">
                        <div className="box-header">
                            <div className="box-title">
                                Cart Items
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table table-bordered whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-start">
                                                Product Name
                                            </th>
                                            <th scope="row" className="text-start">
                                                Price
                                            </th>
                                            <th scope="row" className="text-start">
                                                Quantity
                                            </th>
                                            <th scope="row" className="text-start">
                                                Total
                                            </th>
                                            <th scope="row" className="text-start">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((idx) => (
                                            <tr className="border border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-4">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <img src={idx.preview} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="mb-1 text-[0.875rem] font-semibold">
                                                                <Link href="#!">{idx.title}</Link>
                                                            </div>
                                                            <div className="mb-1 flex items-center align-middle">
                                                                <span className="me-1">Size:</span><span className="font-semibold text-[#8c9097] dark:text-white/50">Large</span>
                                                            </div>
                                                            <div className="mb-1 flex items-center align-middle">
                                                                <span className="me-1">Color:</span><span className="font-semibold text-[#8c9097] dark:text-white/50">Grey<span className="badge bg-success/10 text-success ms-4">In Offer</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold text-[0.875rem]">
                                                        {idx.offerprice}
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group dark:border-defaultborder/10 rounded-md !flex-nowrap">
                                                        <button onClick={() => decrementQuantity(idx.id)} aria-label="button" type="button" className="!border-0 ti-btn ti-btn-icon ti-btn-light  input-group-text flex-grow product-quantity-minus !mb-0" ><i className="ri-subtract-line"></i></button>
                                                        <input type="text" className="form-control form-control-sm text-center !w-[50px] !px-0" aria-label="quantity" id="product-quantity" defaultValue={idx.quantity} />
                                                        <button onClick={() => incrementQuantity(idx.id)} aria-label="button" type="button" className="!border-0 ti-btn ti-btn-icon ti-btn-light input-group-text flex-grow product-quantity-plus !mb-0" ><i className="ri-add-line"></i></button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-[0.875rem] font-semibold">
                                                        {idx.oldpr}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="hs-tooltip ti-main-tooltip">
                                                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon bg-success text-white !font-medium me-1">
                                                                <i className="ri-heart-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add To Wishlist
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="hs-tooltip ti-main-tooltip ltr:[--placement:left] rtl:[--placement:right]">
                                                            <button type="button"
                                                                //  onClick={() => { handleRemove(idx.id); }}
                                                                onClick={() => handleClick(idx.id)}
                                                                className="hs-tooltip-toggle ti-btn ti-btn-icon bg-danger text-white !font-medium btn-delete">
                                                                <i className="ri-delete-bin-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Remove From cart
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))} <tr><td>"There is no product available in the Cart"</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="box !hidden" id="cart-empty-cart">
                        <div className="box-header">
                            <div className="box-title">
                                Empty Cart
                            </div>
                        </div>
                        <div className="box-body flex items-center justify-center">
                            <div className="cart-empty text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                <h3 className="font-bold mb-1 text-[1.75rem]">Your Cart is Empty</h3>
                                <h5 className="mb-4 text-[1.25rem]">Add some items to make me happy :)</h5>
                                <Link href="#!" className="ti-btn bg-primary text-white !font-medium m-4" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="p-4 border-b dark:border-defaultborder/10 block">
                            <div className="alert alert-primary text-center" role="alert">
                                <span className="text-defaulttextcolor">Sale Ends in</span> <span className="font-semibold text-[0.875rem] text-primary ms-1">8hours:32minutes</span>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                <p className="mb-2 font-semibold">Delivery:</p>
                                <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check dark:border-defaultborder/10 " name="btnradio" id="btnradio1" />
                                    <label className="ti-btn ti-btn-outline-light !text-defaulttextcolor dark:hover:!bg-light dark: !border-defaultborder/10 dark:text-defaulttextcolor/70 !border-e-0 dark:!border-defaultborder/10 !rounded-e-none !font-medium" htmlFor="btnradio1">Free Delivery</label>
                                    <input type="radio" className="btn-check active active:bg-light" name="btnradio" id="btnradio2" defaultChecked />
                                    <label className="ti-btn ti-btn-light dark:!border-defaultborder/10  dark:text-defaulttextcolor/70 dark:hover:!bg-light !font-medium !rounded-s-none" htmlFor="btnradio2">Express Delivery</label>
                                </div>
                                <p className="mb-0 mt-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivered by 24,Nov 2022</p>
                            </div>
                            <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-sm !rounded-s-sm  !border-e-0 dark:border-defaultborder/10" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <button type="button" className="ti-btn !bg-primary !text-white !font-medium !rounded-s-none !mb-0" id="coupons">Apply</button>
                                </div>
                                <Link href="#!" className="text-[0.75rem] text-success">10% off on first purchase</Link>
                            </div>
                            <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Sub Total</div>
                                    <div className="font-semibold text-[0.875rem]">$1,299</div>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Discount</div>
                                    <div className="font-semibold text-[0.875rem] text-success">10% - $129</div>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Delivery Charges</div>
                                    <div className="font-semibold text-[0.875rem] text-danger">- $49</div>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Service Tax (18%)</div>
                                    <div className="font-semibold text-[0.875rem]">- $169</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Total :</div>
                                    <div className="font-semibold text-[0.875rem] text-primary"> $1,387</div>
                                </div>
                            </div>
                            <div className="p-4 grid">
                                <Link href="/components/pages/ecommerce/checkout/" className="ti-btn bg-primary  text-white !font-medium !mb-2">Proceed To Checkout</Link>
                                <Link href="/components/pages/ecommerce/products/" className="ti-btn bg-light  !font-medium">Countinue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Cart.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Cart);