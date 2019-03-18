import React from 'react'
import { Field, reduxForm} from 'redux-form'


class Form extends React.Component{
    componentDidMount(){
    }

    componentDidUpdate(){
    }

    onFormSubmit(event){
        event.preventDefault()
    }
    renderInput(){
        return(
            <div>
                <div className='field'>
                    <input>
                    </input>
                </div>
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues.city)
        this.props.reset('location')
    }
    render(){

        return(
            <div className="ui form" style={{width:'1000px'}}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="city" component="input" type="text" placeholder="City">

                    </Field>
                </form>
            </div>
        )
    }
}



export default reduxForm({form:'location'})(Form)