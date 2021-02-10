import React from 'react';

import './about.css';
import resume from './Resume.pdf';

const About = () => {
    return (
        <>            
            <div className="split text-justify relative">
                <p>An avid and quick learner who is able to absorb new ideas and concepts.<br />
                    Eight months ago, I started studying programming with the view of switching my career path and engaging in the exciting and highly dynamic field of Web Development in both front end and back end.
                    Aiming at all times at  producing clean code and always heeding the details to continuously improve it.<br />
                    I am passionate about what I do and I am constantly improving and learning new things.<br />
                    I am confident enough I will be able to prove that I possess the knowledge and skills to be a valuable asset to your working team.
                </p>
                <div className="link__wrapper">
                    <a href={resume} target="_blank" rel="noreferrer" 
                        className="resume__link">

                        <svg className="svg__portfolio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 617.46 272.5">
                            <path d="M248.54,425.43c-4.79,0-7.94,0-9.13-.06-12.37-.46-23.87-7.07-24.13-13.88-.15-3.88-.06-13.83,0-17.66L80,391.9h0l138.35-1.06,0,1.51c0,.14-.18,14.34,0,19s10,10.58,21.25,11c3.88.14,29.47,0,64.88-.17,71.94-.37,180.64-.92,229.86.17h.44c5.25.13,11.19.27,12.65-14.54.32-3.26.13-11.94,0-15.41l-327,1.31V377.35H547.55V247.93c-1.87,2.14-3.8,4.25-5.75,6.29-32.51,34-77.12,55.93-132.61,65.12-.18,2.76-.62,9.56-.8,12.19-.35,5.33-.94,14.25-15.76,17.08-12.61,2.41-28-5-30-14.41a32.64,32.64,0,0,1-.52-9.69,37.5,37.5,0,0,0,.24-4.75l-3.85-.21c-.49,0-50.09-3.07-91.3-33.75-4.07-3-7.8-5.77-11.23-8.29-16.36-12-26.24-19.28-32.4-28.44-.13-.19-.29-.43-.48-.68.21,22.36,1.11,119.75,1.12,122.31v1.39h-.92l-6.56.12h-1.48v-1.48c0-.78-.34-77.8-.57-84.4-1.11-32.13-1.91-73.11.6-85.93,1.1-5.6,12.54-3.79,14.82-3.37l2.3.42-1.35,1.92a70.07,70.07,0,0,1-4.94,6.29c-4.65,4.75-1.1,17.58,3.34,27.12,8.37,18,33.62,37.33,73,56,34.3,16.26,54.07,16.92,59.15,16.75a46.19,46.19,0,0,1,1.29-9.78,26,26,0,0,1,2.66-7.17c5.18-8.6,21.39-11.34,32.12-5.43,2.17,1.2,7.95,4.37,9.87,10.46A39.68,39.68,0,0,1,409,305.53c1.38-.11,2.63-.22,2.9-.28,3.34-.85,6.89-1.46,11-2.18,16-2.78,38-6.6,75-29.49,27.82-17.21,46.19-28.59,49.49-49.14.84-5.23,1.88-11.72-.07-14.45a6.91,6.91,0,0,0-.89-.39H229.73l11.51-11.51h94.48l.42-36.7a9.06,9.06,0,0,1,8.82-8.46h81c3.18.35,9.19,2.76,9.19,9.35V199.2c10.79.1,77.18.7,100.86,1.3.64,0,2.76,0,4.62-.05l3.63,0c1.84,0,147,2.86,153.17,2.91h0c-1.51,0-151.35.09-153.17.09l-3.58,0c-2,0-4,.07-4.75.05-25.65-.65-101.53-1.3-102.29-1.31h-1.49V162.29c0-5.28-5.69-6.25-6.45-6.35H345.05a6,6,0,0,0-5.92,5.59l-.45,39.57H242.47L237,206.61H546.89l.23.08c1.88.63,2.32,1.2,2.46,1.38,2.63,3.42,1.93,9.4.73,16.86-3.52,21.91-23.38,34.2-50.87,51.22-37.49,23.2-59.76,27.07-76,29.9-4,.7-7.53,1.31-10.79,2.14-.55.14-3.06.34-5.06.48l-1.72.12.12-1.72c0-.07.48-7.09-1.24-12.53-1.56-4.94-6.39-7.6-8.46-8.74-10.13-5.57-24.15-2.21-28.1,4.35a22.78,22.78,0,0,0-2.31,6.32,41.72,41.72,0,0,0-1.2,10.42l.06,1.38-1.37.18c-.84.11-21.16,2.49-62.14-16.93-40-19-65.79-38.85-74.46-57.45-2.47-5.29-10-23.13-2.77-30.48a44,44,0,0,0,3.19-3.94c-4.39-.49-8.65-.13-8.94,1.35-1.92,9.78-2.11,40.06-.55,85.25.21,6.21.52,71.92.57,83,1,0,2.13,0,3,0-.12-14.33-1.14-124.17-1.15-125.35l0-4.42,2.72,3.48c.1.13,2.4,3.07,3.33,4.45,5.87,8.73,15,15.46,31.69,27.69,3.44,2.52,7.17,5.27,11.25,8.3,34,25.3,77.19,32.6,89.64,33.16l5.25.29,1.33.08.08,1.33a39.51,39.51,0,0,1-.22,6.64,29.91,29.91,0,0,0,.48,8.7c1.46,7,14.82,14.31,26.47,12.07,12.54-2.4,13-9,13.33-14.33.22-3.35.87-13.38.87-13.38l.08-1.19,1.18-.19c55.38-9,99.82-30.65,132.1-64.43,2.84-3,5.62-6.08,8.27-9.24l2.65-3.16V380.38H223.36v10.38l326.93-1.31.05,1.46c0,.53.42,13,0,17.25-1.74,17.59-10.16,17.38-15.71,17.25h-.43c-49.17-1.09-157.86-.53-229.77-.17C279.64,425.33,259.67,425.43,248.54,425.43ZM547.36,210Z" transform="translate(-79.95 -152.93)"/>
                        </svg>
                        
                    </a>
                </div>
            </div>
            <div className="split">
            <svg className="svg__about" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.45 460.8">
                <path d="M278.87,463l-59.56-41.69s-2.38-73.85,19.06-90.52S261,257,257.43,235.51c0,0-11.14-31.59-44.77-25.62s-30.37,43.93-29.82,64-24.41,58.57-41.76,70c0,0,5.42-46.8-19-75.46S85.22,158.91,108.54,112.81,186.63,20.61,289.68,26,428,83.52,431.22,105.76s-19.52,43.39-19.52,43.39-28.2-19-52.61-17.9c0,0,3.26,45.55-55.31,70.5L298.9,265.2l71.58,75.93s27.12-25.49,41.22-25.49,28.74,13.56,28.74,23.86,2.17,19.53-10.3,32c0,0-3.8-14.1-7.59-10.3s-10.31,13-3.8,30.91,11.39,51.52-5.42,81.89-77-3.79-96.54-10.3S278.87,463,278.87,463Z" transform="translate(-96.14 -25.6)"/>
                <path d="M431.68,290.41a33.8,33.8,0,0,0-1.8-6.59c-.7-2.13-1.62-4.13-2.45-6.19-3.52-8.1-7.7-15.81-11.92-23.49-3.8-6.78-7.79-13.43-11.87-20.06a34.42,34.42,0,0,0,10-4.52,12.88,12.88,0,0,0,5-6,6.47,6.47,0,0,0,.46-2.1,6.55,6.55,0,0,0,0-2,26.23,26.23,0,0,0-.55-3.5c-.9-4.43-2-8.68-3.16-13s-2.34-8.51-3.58-12.75c-2.46-8.47-5.09-16.88-7.77-25.28s-5.46-16.76-8.44-25.05c2,8.58,4.3,17.09,6.38,25.65l6.53,25.58c2.06,8.52,4.41,17.08,6,25.56.39,2.18.74,4.1.21,5.43a8.76,8.76,0,0,1-3.43,3.89,34,34,0,0,1-11.38,4.52l-3.08.7,1.66,2.62c4.65,7.33,9.14,14.8,13.51,22.31s8.62,15.1,12.42,22.85a61.32,61.32,0,0,1,4.52,11.81A20.08,20.08,0,0,1,429,297a19,19,0,0,1-1.6,5.94c-1.64,3.79-4.81,6.83-8.32,9.3a85.44,85.44,0,0,1-11.3,6.47,68.49,68.49,0,0,0,11.94-5.5c3.76-2.25,7.41-5.2,9.6-9.32a20.94,20.94,0,0,0,2.17-6.53A23.08,23.08,0,0,0,431.68,290.41Z" transform="translate(-96.14 -25.6)"/>
            </svg>
            </div>
        </>
    )
};

export default About;