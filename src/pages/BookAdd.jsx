import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField } from 'semantic-ui-react'
import * as Yup from 'yup'

export default function BookAdd() {
    const initialValues = {bookName:"",authorId:""}
    const schema = Yup.object({
        bookName: Yup.string().required("Kitap Adı Zorunlı"),
        authorId: Yup.number().required("Yazar zorunlu")
    })
    return (
        <div>
            <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit={(values)=>{
                axios.post("http://localhost:8080/api/books/add",values)
            }}
            >
                <Form className="ui form">
                    <FormField>
                        <Field name="bookName" placeholder="Kitap Adı"></Field>
                    </FormField>
                    <FormField>
                        <Field name="authorId" placeholder="authorId" />
                    </FormField>
                    <Button type="submit">Ekle</Button>
                </Form>

            </Formik>
        </div>
    )
}
