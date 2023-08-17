import "./style.scss";

const index = () => {
  return (
    <footer className="bg-[#F9F9FB] pt-[58px] pb-[33px]">
      <div className="container">
        <ul className="flex justify-between">
          <li>
            <div>
              <h1 className="text-[18px] leading-4 mb-[18px]">Title</h1>
              <a href="tel:998991234567" className="text-[14px] leading-4 mb-3">
                +998991234567
              </a>
              <div className="flex gap-[20px] mt-[17px]">
                <a href="/">
                  <i className="bx bxl-instagram text-[24px]"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-whatsapp text-[24px]"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-facebook text-[24px]"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <a className="block" href="#">
              Help
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Contact us
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Delivery information
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Payment information
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Customer service
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              About us
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Our Stores
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Flower care
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Site map
            </a>
          </li>
          <li>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Legal
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Privacy policy
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Terms & Conditions
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Cookie policy
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Item 4
            </a>
            <a className="block mb-3 text-[14px] leading-4" href="#">
              Item 5
            </a>
          </li>
        </ul>
        <div className="line w-full h-[1px] border-t-[1px] border-[#AFB1BD] mt-[60px]"></div>
        <p className="text-[12px] leading-[16px] text-[#AFB1BD] mt-5">
          © Copyright, SERIUS{" "}
        </p>
      </div>
    </footer>
  );
};

export default index;
