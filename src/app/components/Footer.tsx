export default function Footer() {
  return (
    <footer className="bg-[#1678F2] py-20">
      <div className="max-w-[1110px] mx-auto flex justify-between">
        <div>
          <img src="/assets/images/doctor_logo.svg" className="mb-5" alt="" />
          <p className="text-white italic mb-5">
            8 W. South St.Buford, GA 30518 <br /> 5Briarwood LaneVienna, VA
            22180 RER
          </p>
          <div className="flex space-x-6">
            <img src="/assets/icons/youtube.svg" alt="" />
            <img src="/assets/icons/whatsapp.svg" alt="" />
            <img src="/assets/icons/facebook.svg" alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-white font-semibold text-xl mb-6">Company Info</h1>
          <ul className="space-y-4">
            <li className="text-white text-base">About</li>
            <li className="text-white text-base">Services</li>
            <li className="text-white text-base">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-semibold text-xl mb-6">Book Now</h1>
          <p className="text-white text-base">Appointment</p>
        </div>
        <div>
          <h1 className="text-white font-semibold text-xl mb-6">Contact</h1>
          <ul className="space-y-4">
            <li className="text-white text-base">+1 123456789</li>
            <li className="text-white text-base">remmcal@mail.com</li>
            <li className="text-white text-base">Phone: +1 12345678</li>
          </ul>
        </div>
        <hr className="text-white border" />
      </div>
    </footer>
  );
}