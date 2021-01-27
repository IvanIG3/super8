import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Link from 'next/link';
import { toast } from 'react-toastify';

import useAuth from '../firebase/auth/useAuth';
import Layout from '../components/layout/Layout';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import Button from '../components/styled/Button';

const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.3); 
    box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.3);
`;

const Login = () => {
    // Hooks
    const { t } = useTranslation();
    const { loginWithEmail, backToLocation } = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const error = await loginWithEmail(email, password);
        if (error) {
            toast.error(t(error));
        } else {
            backToLocation();
        }
    };

    // Form validations
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(t("The email is not valid"))
                .required(t("The email is required")),
            password: Yup.string()
                .required(t("The password is required"))
        }),
        onSubmit: handleSubmit
    });

    return (
        <Layout description="Login page for user authentication">
            <h1>{t('Login')}</h1>
            <FormContainer>
                <Form onSubmit={formik.handleSubmit}>
                    <Label htmlFor="email">{t("Email address")}</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder={t("Enter your email")}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Label style={{ color: "red" }}>
                        {formik.touched.email && formik.errors.email ?
                            formik.errors.email : <br />}
                    </Label>
                    <Label htmlFor="password">{t("Password")}</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder={t("Enter your password")}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Label style={{ color: "red" }}>
                        {formik.touched.password && formik.errors.password ?
                            formik.errors.password : <br />}
                    </Label>
                    <Button type='submit' style={{ width: '100%', marginTop: '20px' }}>
                        {t('Login')}
                    </Button>
                </Form>
                <Link href="/register">
                    <a style={{ textAlign: "center" }}>
                        <p>{t("I don't have an user account. Let's create one!")}</p>
                    </a>
                </Link>
            </FormContainer>
        </Layout>
    );
};

export default Login;