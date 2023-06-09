import axios from "axios";

const URL = "http://localhost:8000";

export const getData = async () => {
  try {
    return await axios.get(`${URL}/get`);
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
