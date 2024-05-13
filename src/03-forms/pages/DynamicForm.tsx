import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

{/* console-log(formJson)   ver en consola lo que muestra el json*/}
export const DynamicForm = () => {
    return (
        <div>
            <h1>Comentario</h1>

            <Formik
                initialValues={{
                    name: "pepito"
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
            >
                { (formik) => (
                    <Form>
                        { formJson.map(({ type, name, placeholder, label }) => {
                            return <MyTextInput 
                                        key={ name }
                                        type={(type as any)} 
                                        name={name} 
                                        label={label} 
                                        placeholder={placeholder}/>
                        })}

                    <button type="submit"> Enviar </button>
                     </Form>
                )}


            </Formik>


        </div>
    )
}