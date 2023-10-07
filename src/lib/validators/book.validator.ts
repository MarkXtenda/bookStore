import yup from 'yup'

export default async function validate(formData: any) {
    const schema = yup.object({
        title: yup.string().required('Book title is required').min(4).max(40),
        author: yup.string().required('Author is required').min(5).max(200),
        short_description: yup.string().required('Short book description is required').min(5).max(200),
        description: yup.string().required('Book description is required').min(5).max(4500),
        small_picture: yup.mixed().required('Small picture is required')
        .test('fileType', 'The file must be an image', (val: any)=>{
            if (val && val.type) {
                return ['image/png', 'image/jpeg'].includes(val.type);
            }
            return true;
        })
        .test('fileSize', 'The file is too large', (val: any)=>{
            if (val && val.size) {
                return val.size < 4_000_000;
            }
            return true;
        }),
        main_picture: yup.mixed().required('Main picture is required')
        .test('fileType', 'The file must be an image', (val: any)=>{
            if (val && val.type) {
                return ['image/png', 'image/jpeg'].includes(val.type);
            }
            return true;
        })
        .test('fileSize', 'The file is too large', (val: any)=>{
            if (val && val.size) {
                return val.size < 4_000_000;
            }
            return true;
        })
    });
    const data = {
    title: formData.get('title'),
    author: formData.get('author'),
    description: formData.get('description'),
    short_description: formData.get('short_description'),
    main_picture: formData.get('main_picture'),
    small_picture: formData.get('small_picture')
}

try {
    await schema.validate(data, {abortEarly: false});
    return {success: true, book: data}
} catch (error: any) {
    const errors = error.inner.reduce((agg: any, e: any)=>{
        if (!agg['error_' + e.path]) {
            agg['error_' + e.path] = e.message;
        }
        return agg;
    }, {})

    delete data.small_picture
    delete data.main_picture

    return {...errors, ...data, success: false}
}
}

