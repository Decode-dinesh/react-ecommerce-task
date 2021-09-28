import React,{useState} from "react";
import {RatingView} from "react-simple-star-rating";
export default function Card(props){

    
    return(
       <>
        <div class="col-lg-3">
           <div class="col mb-5">
                    <div class="card h-100">
            
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div class="card-body p-4">
                            <div class="text-center">

                                {
                                    props.productData.inStock ? <h5 class="fw-bolder">{props.productData.name}</h5> : <h5 class="fw-bolder"><del>{props.productData.name}</del></h5>
                                }


                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <RatingView ratingValue={props.productData.Rating}></RatingView>
                                    </div>                                         
                                
                                {props.productData.price}
                            </div>
                        </div>
                        
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button disabled={!props.productData.inStock || props.cartList.some(obj => obj.id == props.productData.id)} class="btn btn-outline-dark mt-auto" onClick={() => props.handleClick(props.productData)}>Add to cart</button></div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}
