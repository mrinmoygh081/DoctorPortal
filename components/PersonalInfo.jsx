import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseSexOptions } from "@/utils/choose";

export default function PersonalInfo() {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    patientId: "",
    name: "",
    phone: "",
    age: "",
    sex: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const addBtn = async () => {
    if (addForm?.productline_name !== "") {
      const data = await postAPI("productlines", addForm, null);
      if (data?.status) {
        toast.success("Product Line is added succesfully");
        await getData();
        setAddForm({
          patientId: "",
          name: "",
          phone: "",
          age: "",
          sex: "",
          address: "",
        });
      } else {
        toast.error("Product data is not added. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="">
        <h1>Add Personal Info</h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="patientId">Patient Id</label>
              <input
                type="text"
                className="form-control pb-2"
                id="patientId"
                name="patientId"
                value={addForm?.patientId}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control pb-2"
                id="name"
                name="name"
                value={addForm?.name}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control pb-2"
                id="phone"
                name="phone"
                value={addForm?.phone}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="sex">Sex</label>
              <Select
                options={chooseSexOptions}
                components={animatedComponents}
                isMulti={false}
              ></Select>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control pb-2"
                id="age"
                name="age"
                value={addForm?.age}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>
        <div className="pb-5">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control pb-2"
            id="address"
            name="address"
            value={addForm?.address}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD PERSONAL INFO
          </button>
        </div>
      </div>
    </>
  );
}
