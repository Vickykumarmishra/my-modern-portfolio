import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  Subject:Yup.string().min(5).max(25).required('Please write subject'),
  useremail: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(10).max(60).required("Please enter your message"),
  
    
});