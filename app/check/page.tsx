// import { GetStaticProps, InferGetStaticPropsType } from 'next';

// export const getStaticProps: GetStaticProps = async () => {
//   // Fetch data from WordPress API
//   const res = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts');
//   const posts = await res.json();

//   // Pass posts to the page via props
//   return { props: { posts } };
// };

// type Post = {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
// };

// const BlogsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
//   <div>
//     {posts.map((post: Post) => (
//       <div key={post.id}>
//         <h2>{post.title.rendered}</h2>
//         <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//       </div>
//     ))}
//   </div>
// );

// export default BlogsPage;

'use client'
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data:FieldValues) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex'>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}
