import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";

export const Form = () => {
    const schema = yup.object().shape({
        //the objects have to be exactly the same in the input/form
        fullName: yup.string().required("Your full name is required"),
        email: yup.string().email().required(),
        phone: yup.number().positive('Only positive integer').integer().min(8).required('a phone number'),
        age: yup.number().positive().integer().min(18).max(100).required(),
        password: yup.string().min(4).max(20).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"),null], "Password does not matched").required(), 
        //"null" - is specified here to pick only value from password field
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
            //the @hookform/resolvers package will give us a function to take care of "useForm" - hook
            resolver: yupResolver(schema),

            //by Doing this step: we are telling yup to take "schema"- the function above
            //that "schema" function .typeError("Inputs does not matched")will be the format of our form
    });

    //Form handleing onSubmit
    const FormOnSubmit = (data) => {
        console.log(data);
    };
    return (
            <div className="form-box">
            <h5 className="form-step">Simple Form in React</h5>
            <form onSubmit={handleSubmit(FormOnSubmit)}>
                <div className="field1">
                <label> customer info </label>
                <input type="text" placeholder="Full Name..." {...register("fullName")}/>
                {/*"?": allows us to Only read the error if it has an error messgae */}
                <p>{errors.fullName?.message}</p>

                <input type="number" placeholder="Phone 000-000-0000" {...register("phone")}/>
                <p>{errors.phone?.message}</p>

                <input type="number" placeholder="Age..." {...register("age")}/>
                <p>{errors.age?.message}</p>

                <input type="text" placeholder="E-mail..." {...register("email")}/>
                <p>{errors.email?.message}</p>

                <input type="password" placeholder="Password..." {...register("password")}/>
                <p>{errors.password?.message}</p>

                <input type="password" placeholder="Confirm Password..." {...register("confirmpassword")}/>
                <p>{errors.confirmpassword?.message}</p>
                
                <textarea type="text" placeholder="Shipping Address" {...register("ShippingAddress")}/>
                <textarea type="text" placeholder="Physical location of the project" {...register("projects")}/>
                </div>

                <button type="submit" id="submitBtn" className="submitBtn">submit</button>
            </form>

            <button className="prevBtn" type="submit">PREV</button>
            <button className="nextBtn" type="submit">NEXT</button>
            </div>
    );
};

//In this module, pls install: npm i react-hook-form yup && i @hookform/resolver
// then install hook-form/resolver to take care of inputs's datas: npm i @hookform/resolver
// This "yup" provide a validation format to check our Form for correct/incorrect inputs
// Form can not be submit if the validation part is not passed