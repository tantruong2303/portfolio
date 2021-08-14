import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ApiState } from '../api/api.interface';
import useFormError from '../common/hooks/useFormError';
import SeoHead from '../components/seoHead';
import { RootState, store } from '../store';
import commonThunk from '../store/api/thunk';
export interface ContactProps {}

interface ContactForm {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

const defaultValues: ContactForm = {
    email: '',
    message: '',
    phone: '0999999999',
    fullName: '',
};

const Contact: React.FC<ContactProps> = () => {
    const { register, handleSubmit, reset } = useForm<ContactForm>({ defaultValues });
    const apiState = useSelector<RootState, ApiState>((state) => state.api);
    const errors = useFormError<ContactForm>(defaultValues);
    const handleOnSubmit = (data: ContactForm) => {
        store.dispatch(commonThunk.sendSupport(data));
    };

    React.useEffect(() => {
        if (apiState.message) {
            reset(defaultValues);
        }
    }, [apiState.message]);

    return (
        <>
            <SeoHead title="Truong Binh Tan | Contact" canonical="/contact" />
            <div>
                <div className="flex flex-col items-center py-24 space-y-8">
                    <h1 className="text-center text-white text-8xl">Get In Touch</h1>
                    <p className="max-w-xl text-2xl text-center text-white text opacity-70">
                        You have a project need to discussion please fill in the form below and I will get back within 1-2 days.
                    </p>
                </div>
                <form className="w-full py-8 bg-white" onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className="mx-auto mb-4 space-y-4 md:mb-0 w-96 fade-in">
                        <div className="space-y-1">
                            <label className="block ">
                                Full Name
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <input {...register('fullName')} className="w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none" />
                            {Boolean(errors.fullName.length) && <p className="text-red-500 ">Full Name {errors.fullName}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="block ">
                                Email
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <input {...register('email')} className="w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none" />
                            {Boolean(errors.email.length) && <p className="text-red-500 ">Email {errors.email}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="block ">
                                Message
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <textarea
                                {...register('message')}
                                className="w-full h-40 px-2 py-1 border rounded-md border-sandal-500 focus:outline-none"
                                placeholder="Message ..."
                            ></textarea>
                            {Boolean(errors.message.length) && <p className="text-red-500 fade-in">Message {errors.message}</p>}
                        </div>
                        <button className="px-8 py-2 text-lg font-medium text-white duration-300 transform border focus:outline-none rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;
