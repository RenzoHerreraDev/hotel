import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRooms as createRoomsAction } from '../redux/actions'

import Layout from '../components/Layout';

function getBase64(file){
    return  new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject ;
        reader.readAsDataURL(file)
    })

}
class FormNew extends Component {
  constructor(props) {
      super(props);
      this.state = {
          formControls: 
          {
              description: {
                value: ''
              },
              price: {
                value: ''
              },
              size: {
                value: ''
              },
              capacity: {
                value: ''
              },
              imageRef:{
                value: '',
                file: '',
              },
              pets:{
                value: ''
              },
              breakfast:{
                value: ''
              },
              type:{
                value: ''
              }
         }
      }
    
  }
  
  changeHandler = event => {
    const name = event.target.name;

        if( event.target.name == 'breakfast' | event.target.name == 'pets'){

            const value = event.target.checked;
            this.setState({
                formControls: { ...this.state.formControls, [name]: {  ...this.state.formControls[name], value  }
                }
              });
        }
       else if(  event.target.files != null ) {
          const value = event.target.value;
            const file =  event.target.files[0] ;
            this.setState({
                formControls: { ...this.state.formControls, [name]: {  ...this.state.formControls[name], file  , value}

                }
            });
        }else{
          const value = event.target.value;
            this.setState({
                formControls: { ...this.state.formControls, [name]: {  ...this.state.formControls[name], value  }
                }
              });
        }
  }
  restForm() {

    this.setState({
      formControls:{
        description: {
          value: ''
        },
        price: {
          value: ''
        },
        size: {
          value: ''
        },
        capacity: {
          value: ''
        },
        imageRef:{
          value: '',
          file: '',
        },
        pets:{
          value: ''
        },
        breakfast:{
          value: ''
        },
        type:{
          value: ''
        }
      }

    });


  }
  Send = async (e) => {
    e.preventDefault();
    const { createRooms }  = this.props ;
    let image;
    const formData = {};
    debugger;
    
    for (let formElementId in this.state.formControls) {
          formData[formElementId] = this.state.formControls[formElementId].value;
    }
   if( this.state.formControls.imageRef.file != '' ){
        const file = this.state.formControls.imageRef.file
        image = await getBase64(file)

      }

   // console.dir(formData);
   createRooms({
        image,
        description: formData.description,
        name: formData.type,
        slug: formData.type,
        type: formData.type,
        price: formData.price,
        size: formData.size,
        capacity:  formData.capacity,
        pets: formData.pets,
        breakfast:  formData.breakfast,     
      });
      alert('Nueva habitacion cargada');
       this.restForm();
    

   } 
    
   render() {
      return (
        <Layout>
        
        <div className="content">
             <h1 className="logo">Nueva  <span>habitación</span></h1>
            <div className="new-form">
                <form onSubmit={this.Send}>
                       
                        <p>
                             <label for="">Precio por noche</label>
                             <input required type="number" 
                                    name="price" 
                                    value={this.state.formControls.price.value} 
                                    onChange={this.changeHandler} />
                        </p>
                        <p>
                             <label for=""> Tamaño m²</label>
                             <input required type="number" 
                                    name="size" 
                                    value={this.state.formControls.size.value} 
                                    onChange={this.changeHandler} />
                        </p>
                        <p>
                            <label for="">Capacidad</label>
                            <input required type="number" 
                                    name="capacity" 
                                    value={this.state.formControls.capacity.value} 
                                    onChange={this.changeHandler}    />
                        </p>
                        
                        <p className="description">
                            <label > Description</label>
                            <textarea required type="text" 
                                            name="description" 
                                            value={this.state.formControls.description.value} 
                                            onChange={this.changeHandler}   />
                        </p>
                        <p className='imageRef'>
                             <label  >Cargar tu foto</label>
                             <input required type="file" name="imageRef"   
                              value={this.state.formControls.imageRef.value} 
                             onChange={this.changeHandler}  ></input>
                        </p>
                     
                      
                        
                        <div className='typeBool'>
                            <p>
                                <label>Mascotas</label>
                                <input  type="checkbox" name="pets"  onChange={this.changeHandler}     /> 
                            </p>

                            <p>
                                <label>Desayuno</label>
                                <input  type="checkbox" name="breakfast"   onChange={this.changeHandler}    /> 
                            </p>
                            <p className='Type'>

                                <label  >Tipo</label>
                                 <select name="type"  onChange={this.changeHandler} required   >
                                 <option value="" selected> </option> 
                                    <option value="Estandar-Familiar" >Estandar Familiar</option>
                                    <option value="Basico-Familiar">Basica familiar</option>
                                    <option value="Doble-Estandar">Doble estandar</option>
                                    <option value="Doble-Basico">Doble basico</option>
                                    <option value="Doble-Economica">Doble economica</option>
                                    <option value="Individual-Economica">Individual economica</option>
                                    <option value="Individual-Basico">Individual basico</option>
                                    <option value="Individual-Estandar">Individual estandar</option>
                                    <option value="Individual-Lujo">Individual de lujo</option>
                                </select>
                            </p>
                        </div>
                        <p class='send'>
                            <button  type='submit'> Send</button>
                        </p>
                </form>
            </div>
        </div>

    </Layout>
      );
  }

}

const mapStateToProps = (state ) => {

 }
 
 const mapDispatchToProps ={
     createRooms: createRoomsAction
 
 };
 export default connect( mapStateToProps ,mapDispatchToProps )(FormNew);
