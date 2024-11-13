import express from "express"
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/coupon.js";
import { adminOnly } from "../middlewares/auth.js";
const app=express.Router();

app.post("/create",createPaymentIntent);
app.post("/coupon/new",newCoupon);
app.get("/discount",applyDiscount);
app.post("/coupon/new", adminOnly, newCoupon);
app.get("/coupon/all", adminOnly, allCoupons);
app.delete("/coupon/:id", adminOnly, deleteCoupon);

export default app