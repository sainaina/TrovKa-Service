import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = ({ service }) => {
  if (!service) {
    return <div>Loading...</div>; // or some other fallback UI
  }

  const workingDays = service.working_days ? service.working_days.split('-') : [];
  const startTime = service.start_time || "N/A";
  const endTime = service.end_time || "N/A";
  const { t } = useTranslation();

  return (
    <div className="p-24 -mt-16">
      <h2 style={{ color: "#032278" }} className="border-b-2 border-gray-300 font-bold text-2xl">
        Contact Info
      </h2>
      <div className="flex mt-8">
        <div>
          <img src="https://cityofwater.wordpress.com/wp-content/uploads/2012/08/screen-shot-2012-08-01-at-11-23-12-am.png" alt="Map" />
        </div>
        <div className="ml-16">
        <h2 style={{ color: "#032278" }} className="font-semibold">Working Days</h2>
          <div className="flex gap-2">
            <div className="flex flex-col mr-8">
              {workingDays.map((day, index) => (
                <div key={index} className="mb-2">{day}</div>
              ))}
            </div>
            <div className="flex flex-col">
              {workingDays.map((_, index) => (
                <div key={index} className="mb-2">
                  {startTime} - {endTime}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ color: "#032278" }} className="font-semibold">Address</h2>
            <p style={{ color: "#9E9A9A" }}>Russian Federation Blvd (110), Phnom Penh 120404</p>
            <h2 style={{ color: "#032278" }} className="font-semibold">Email</h2>
            <p style={{ color: "#9E9A9A" }}>zohansmth@gmail.com</p>
            <h2 style={{ color: "#032278" }} className="font-semibold">Phone</h2>
            <p style={{ color: "#9E9A9A" }}>{service.phone_number || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
