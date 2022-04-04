import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-10 '>Some important Blogs</h2>
            <div className='mx-10 my-10'>
                <h3 className='text-2xl my-5 font-bold'>1.What is React context API?</h3>

                <p className='text-xl'>
                    Answer : In React application we pass data from one component to another component by props, it's called props drilling. But this process is too complex to handle and understand in the UI of a react application. In the context of API, React gives us a wonderful way to handle this type of complex problem and pass different data from one component to another without passing any props and props drilling. So, in React application we can use any data in any child component through context API without passing the intermediate elements. This is a built-in system of React.
                </p>
            </div>
            <div className='mx-10 my-10'>
                <h3 className='text-2xl my-5 font-bold'>2.What is HTML semantic tag?</h3>

                <p className='text-xl'>
                    Answer : A semantic element clearly describes its meaning to both the browser and the developer. Semantic HTML tags are clear to understand to the developers and the browser because they are very meaningful HTML elements. The main difference between semantic and non-semantic HTML tags is the clear meaning of the elements. Such as  div , can not define itself instead of section  which is more understandable to the developer, it tells about a section of a webpage. Examples of semantic elements table , form ,nav - can easily describe what they are containing in the tag. Semantic HTML tags are - article,aside ,figure ,header,footer,main,nav ,section,summary,time,
                </p>
            </div>
            <div className='mx-10 my-10'>
                <h3 className='text-2xl my-5 font-bold'>3.What is inline and block element in HTML?</h3>

                <p className='text-xl'>
                    Answer : Every HTML element has a different display value, there are two types of width values in HTML, a. block, b. inline. A block levels elements take full width available on the page. P , div are two most commonly used HTML block elements tags .The div element can contain other HTML tags inside . On the other hand, Inline elements do not start a new line, it takes themselves in a sentence or paragraph and takes space as it needs, and it can not contain a block element. span is a most used inline tag
                </p>
            </div>
        </div>
    );
};

export default Blogs;