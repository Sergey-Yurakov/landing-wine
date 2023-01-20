import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';

import barrel from '../../images/barrel.svg';
import grape from '../../images/grape.svg';
import ModalWindow from '../ModalWindow/ModalWindow';
import cl from './Form.module.scss';

const Form = () => {
    const [modal, setModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            telefonNumber: '',
            street: '',
        },
    });

    const onSubmit = data => {
        console.log('data', data);
        reset();
        setModal(true);
    };

    return (
        <section className={cl.form} id="form">
            <div className={cl.form__container}>
                <div className={cl.form__title}>
                    <h2>Запись на дегустацию</h2>
                </div>
                <div className={cl.form__leftImg}>
                    <img src={grape} alt="grape" />
                </div>
                <div className={cl.form__rightImg}>
                    <img src={barrel} alt="barrel" />
                </div>
                <div className={cl.form__content}>
                    <div className={cl.form__text}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
                            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.
                        </p>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className={cl.form__forms}>
                            <div className={cl.form__name} id="firstName">
                                <input
                                    placeholder="Имя"
                                    {...register('firstName', {
                                        required: 'Поле обязательно для заполнения',
                                        minLength: {
                                            value: 4,
                                            message: 'Минимум 4 символа',
                                        },
                                    })}
                                />
                            </div>
                            <div className={cl.form__phone} id="numberTelefon">
                                <input
                                    placeholder="Номер телефона"
                                    {...register('telefonNumber', {
                                        required: 'Поле обязательно для заполнения',
                                        // eslint-disable-next-line no-useless-escape
                                        pattern: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
                                    })}
                                />
                            </div>
                        </div>

                        <div className={cl.form__street} id="streetInput">
                            <input
                                placeholder="Бутик на Невском 103"
                                {...register('street', {
                                    required: 'Поле обязательно для заполнения',
                                })}
                            />
                        </div>
                        <div className={cl.form__button}>
                            <button disabled={!isValid}>записаться</button>
                        </div>
                    </form>
                </div>
            </div>
            <Tooltip
                anchorId="firstName"
                place="top"
                content={errors?.firstName && (errors?.firstName?.message || 'Error!')}
                variant="error"
            />
            <Tooltip
                anchorId="numberTelefon"
                place="top"
                content={errors?.telefonNumber && (errors?.telefonNumber?.message || 'Error!')}
                variant="error"
            />
            <Tooltip
                anchorId="streetInput"
                place="top"
                content={errors?.street && (errors?.street?.message || 'Error!')}
                variant="error"
            />

            <ModalWindow visible={modal} setVisible={setModal} title="Заявка принята">
                <p>Ждем вас на дегустации!</p>
            </ModalWindow>
        </section>
    );
};

export default Form;
