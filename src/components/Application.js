import React, { Component } from 'react'
const regForName=RegExp(/^[a-zA-Z]{2,20}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForphone=RegExp(/^[7-9][0-9]{9}$/);
const regForAddress=RegExp(/^[a-zA-Z0-1000]{2,30}$/);
const regForAadharcard=RegExp(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/)
const regForPancard=RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)

export class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:null,
            lname:null,
            address:null,
            aadhar:null,
            pancard:null,
            email:null,
            password:null,
            cpassword:null,
            phone:null,
            age:null,
            pincode:null,

            errors:{
                fname:'',
                lname:'',
                address:'',
                aadhar:'',
                pancard:'',
                email:'',
                password:'',
                cpassword:'',
                phone:'',
                age:'',
                pincode:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'fname':
                    errors.fname=regForName.test(value)?'':'Enter alphabet only';
                     break;
                case 'lname':
                    errors.lname=regForName.test(value)?'':'Enter alphabet only';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'address':
                    errors.address=regForAddress.test(value)?'':'Maximum 30 Alphanumeric Character Allowd';
                    break;
                 case 'aadhar':
                    errors.aadhar=regForAadharcard.test(value)?'':'Enter Valid Aadhar Number';
                    break;
                case 'pancard':
                    errors.pancard=regForPancard.test(value)?'':'Enter Valid Pan Number';
                    break;
                case 'password':
                    errors.password=value.length<8?'Password must me 8 chanrater long':'';
                    break;
                case 'cpassword':
                    errors.cpassword=value.length<8?'Enter valid Password':'';
                    break;
                case 'pincode':
                    errors.pincode=value.length<0 && value.length>6?'Enter valid pin Code':'';
                    break;
                case 'phone':
                    errors.phone=regForphone.test(value)?parseInt(''):'Enter 10 digit only';
                    break;
                    default:
                    
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Valid Form");
           }
           else {
               alert("Invalid Form");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            if (this.state.password !== "undefined" && this.state.cpassword !== "undefined") {
                if (this.state.password  !== this.state.cpassword ) {
                  valid = false;
                  alert("Passwords does not match!");
                }
              } 
              return valid;
        }
    render() {
        const {errors}=this.state;
        return (
            <div className="container text-uppercase" style={{backgroundColor:"#f9f7f7"}}>
                <h2 className="display-4 text-uppercase text-center">  Application </h2>
                <h2 className="display-4 text-uppercase text-center"> form</h2>
            <form onSubmit={this.formSubmit}>
                <div class="form-row ">
                    <div class="form-group col-md-4">
                        <label for="fname">FIRST NAME</label>
                        <input type="text" id="101" class="form-control form-control-sm"name="fname" onChange={this.handler}/>
                            {errors.fname.length>0 && 
                            <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="lname"> LAST NAME</label>
                        <input type="text" id="102" class="form-control form-control-sm"name="lname" onChange={this.handler}/>
                            {errors.lname.length>0 && 
                            <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                    </div>
                    <div class="form-group col-md-4">
                        <label >DATE</label>
                        <input type="date"  class="form-control form-control-sm" /><br/>
                    </div>
                    </div>  
                    <div className="form-group">
                        <label for="address"> Current Address</label>
                        <input type="text" class="form-control form-control-sm" name="address" required onChange={this.handler}/>
                        {errors.address.length>0 && 
                                <span style={{color:'red'}}>{errors.address}</span>}<br/>
                    </div> 
                    <div className="form-group">
                        <label for="address"> Permanent Address</label>
                        <input type="text" class="form-control form-control-sm" name="address" requiredonChange={this.handler} /><br/>
                        {errors.address.length>0 && 
                                <span style={{color:'red'}}>{errors.address}</span>}<br/>
                    </div> 
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="aadhar">Aadhar Card</label>
                        <input type="text"  class="form-control form-control-sm"name="aadhar"required  onChange={this.handler}/>
                                {errors.aadhar.length>0 && 
                                <span style={{color:'red'}}>{errors.aadhar}</span>}<br/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="pancard">Pancard</label>
                        <input type="text" class="form-control form-control-sm"name="pancard"required  onChange={this.handler}/>
                                {errors.pancard.length>0 && 
                                <span style={{color:'red'}}>{errors.pancard}</span>}<br/>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>City</label><br/>
                    <select class="form-select form-control  form-control-sm">
                            <option selected>Select</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Pune</option>
                            <option value="3">Dehli</option>
                            <option value="4">Chennai</option>
                            <option value="5">Banglore</option>
                            <option value="6">Bhopal</option>
                            <option value="7">None of these</option>
                    </select>
                       
                    </div>
                    <div class="form-group col-md-4">
                        <label>State</label>
                        <select class="form-select form-control  form-control-sm">
                            <option selected>Select</option>
                            <option value="11">Maharashtra</option>
                            <option value="22">Goa</option>
                            <option value="33">Dehli</option>
                            <option value="44">Karnatak</option>
                            <option value="55">Hariyana</option>
                            <option value="66">Rajasthan</option>
                            <option value="77">Madhapradesh</option>
                            <option value="88">Gujarat</option>
                            <option value="99">None of these</option>
                    </select>
                    </div>
                        <div class="form-group col-md-2">
                            <label >pinCode</label>
                            <input type="number"  class="form-control form-control-sm" name="pincode" onChange={this.handler} />
                            {errors.pincode.length>0 && 
                            <span style={{color:'red'}}>{errors.pincode}</span>}<br/>
                        </div>
                    </div>   
                    <div class="form-row"> 
                      
                          
                        <div className="form-group form-group col-md-6">
                                <label for="email">Email</label>
                                <input type="text"  class="form-control form-control-sm"name="email"required  onChange={this.handler}/>
                                {errors.email.length>0 && 
                                <span style={{color:'red'}}>{errors.email}</span>}<br/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="phone"> PHONE NO:</label>
                                <input type="number" name="phone" class="form-control form-control-sm" required onChange={this.handler}/>
                                {errors.phone.length>0 && 
                                <span style={{color:'red'}}>{errors.phone}</span>}<br/>
                            </div>
                            <div className="form-group form-group col-md-2">
                                <label for="age">Age</label>
                                <input type="number" class="form-control form-control-sm" name="age" required /><br/>
                            </div>
                                  
                </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="password">PASSWORD</label>
                        <input type="password" name="password"  class="form-control form-control-sm"required onChange={this.handler}/>
                            {errors.password.length>0 && 
                            <span style={{color:'red'}}>{errors.password}</span>}<br/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="cpassword">CPassword</label>
                        <input type="password" name="cpassword"  class="form-control form-control-sm"required onChange={this.handler}/>
                            {errors.cpassword.length>0 && 
                            <span style={{color:'red'}}>{errors.cpassword}</span>}<br/>
                        </div>
                    </div>
                    <h4>Gardian's Information</h4> <br/>
                    <div class="form-row ">
                    <div class="form-group col-md-4">
                    <label for="fname">FIRST NAME</label>
                        <input type="text" id="103" class="form-control form-control-sm"name="fname" onChange={this.handler}/>
                            {errors.fname.length>0 && 
                            <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                        
                    </div>
                    <div class="form-group col-md-4">
                    <label for="lname"> LAST NAME</label>
                        <input type="text" id="104" class="form-control form-control-sm"name="lname" onChange={this.handler}/>
                            {errors.lname.length>0 && 
                            <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                    </div>
                    <div class="form-group col-md-4">
                        <label >Relationship</label>
                        <select class="form-select form-control  form-control-sm">
                            <option selected>Select</option>
                            <option value="51">Father</option>
                            <option value="52">Mother</option>
                            <option value="53">Sister</option>
                            <option value="54">Brother</option>
                            <option value="56">Uncle</option>
                            <option value="65">Aunt</option>
                            <option value="75">Grandfather</option>
                            <option value="81">Grandmother</option>
                            <option value="90">None of these</option>
                    </select>
                        
                    </div>
                    </div>  
                    <div class="form-row">
                    <div className="form-group  col-md-6">
                        
                        <label for="address"> Correspondance  Address</label>
                        <input type="text" class="form-control form-control-sm" name="address" required onChange={this.handler}/>
                        {errors.address.length>0 && 
                                <span style={{color:'red'}}>{errors.address}</span>}<br/>
                    </div> 
                    <div className="form-group col-md-4">
                                <label for="phone"> PHONE NO:</label>
                                <input type="number" name="phone" class="form-control form-control-sm" required onChange={this.handler}/>
                                {errors.phone.length>0 && 
                                <span style={{color:'red'}}>{errors.phone}</span>}<br/>
                            </div>      
                  </div>
                    <div class="form-row text-center">
                        <div class="form-group col-md-6">
                            <input  className="btn btn-outline-dark border-0"type="submit" value="SUBMIT" onClick={this.formSubmit}/>
                        </div>
                        <div class="form-group col-md-6">
                        <input className="btn btn-outline-dark border-0"type="reset" value="RESET"/>
                        </div>
                     </div>
                </form>
            
            </div>
        )
    }
}

export default Application;
