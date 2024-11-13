const productdtails = () => {


  return (
    <section id="prodetails" class="section-p1">
      <div class="single-pro-image">
        <img src="images/f1.jpg" width="100%" id="mainimg" />
        <div class="small-img-group">
          <div class="small-img-col">
            <img src="images/f1.jpg" width="100%" class="small-img" />
          </div>
          <div class="small-img-col">
            <img src="images/f2.jpg" width="100%" class="small-img" />
          </div>
          <div class="small-img-col">
            <img src="images/f3.jpg" width="100%" class="small-img" />
          </div>
          <div class="small-img-col">
            <img src="images/f4.jpg" width="100%" class="small-img" />
          </div>
        </div>
      </div>
      <div class="single-pro-details">
        <h6>Home/ T-Shirt</h6>
        <h4>Men's Fashion T shirts</h4>
        <h2>$120.0</h2>
        <select>
          <option>XLL</option>
          <option>XL</option>
          <option>small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <input type="number" value="1" />
        <button class="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi
          commodi ex eligendi atque, aspernatur fuga eveniet ea corporis maiores
          libero ipsam magnam aliquid itaque doloremque optio esse repellat
          maxime?
        </span>
      </div>
    </section>
  );
};
export default productdtails;
