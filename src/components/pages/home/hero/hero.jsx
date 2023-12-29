/* eslint-disable arrow-body-style */

'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import isEmailValid from 'utils/validation';

import illustration from './images/illustration.png';

const Hero = () => {
  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    isEmpty: false,
  });
  const [email, setEmail] = useState('');

  const callback = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setState({ isLoading: false, isError: false, isSuccess: false, isEmpty: true });
      return;
    }
    setState({ isLoading: true, isError: false, isSuccess: false, isEmpty: false });
    setTimeout(() => {
      if (isEmailValid(email)) {
        setState({ isLoading: false, isError: false, isSuccess: true, isEmpty: false });
      } else {
        setState({ isLoading: false, isError: true, isSuccess: false, isEmpty: false });
      }
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false, isError: false, isSuccess: false, isEmpty: false });
    }, 5000);
  }, [state]);

  return (
    <section>
      <div className="container flex">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 max-w-[786px] font-mono text-[76px] font-normal leading-[85.50px] text-gray-98 lg:text-[32px] sm:max-w-[370px] sm:text-2xl">
            Unlock valuable insights from subscription data
          </h2>
          <p className="text-zinc-100 max-w-[700px] font-sans text-xl font-light leading-[30px] tracking-tight text-gray-94 lg:text-[32px] sm:max-w-[370px] sm:text-2xl">
            Analyze your subscription ecosystem for cost optimization and risk management
          </p>
          <form
            className="relative mt-10 flex max-w-[504px] before:absolute before:-inset-px before:rounded-[100px] before:bg-gradient-to-r before:from-[#3b2b41] before:to-[#4e3959] md:mx-auto"
            onSubmit={(e) => callback(e)}
          >
            <span className="absolute inset-0 rounded-[100px] bg-black" />
            <div className="relative z-20 flex h-[60px] w-full items-center overflow-hidden rounded-[100px] bg-gradient-to-r from-primary-1/10 to-white/10 px-2 lg:p-1.5">
              <input
                className="remove-autocomplete-styles py-4.5 text-16 h-14 w-full flex-grow border-none bg-transparent px-6 font-light leading-tight tracking-wider text-white/80 outline-none placeholder:bg-[linear-gradient(90deg,#EAC8F2_0%,#E6ADEC_32.41%,#D49EE8_71.97%,#CA97E6_100%)] placeholder:bg-clip-text placeholder:opacity-80 lg:h-12 lg:py-3 md:px-5"
                type="email"
                placeholder="Your business email..."
                name="email"
                id="email"
                value={state.isError ? 'Oops! Something went wrong' : email}
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
              />
              {!state.isError && !state.isLoading && !state.isSuccess && (
                <Button theme="secondary-purple" type="submit" size="sm">
                  <span className="font-semibold sm:sr-only">Free Trial</span>
                </Button>
              )}
              {state.isLoading && (
                <div className="flex h-12 w-14 items-center justify-center rounded-full bg-primary-1 text-center">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 animate-spin fill-white text-secondary-3 dark:text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#BB99FF"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              {state.isError && (
                <div className="flex h-12 w-14 items-center justify-center rounded-full bg-primary-2 text-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8569 2.14453L2.14258 15.8588"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.14314 2.14453L15.8574 15.8588"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {state.isSuccess && (
                <div className="flex h-12 w-14 items-center justify-center rounded-full bg-secondary-1 px-0">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.14284 9.76187L8.63778 15.8571L21.8571 2.14282"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </form>
          {state.isEmpty && (
            <div className="px-8 py-2 font-sans text-secondary-2">Email is a required field</div>
          )}
        </div>
        <div>
          <Image
            className="remove-image-loading-visual"
            src={illustration}
            width={716}
            height={797}
            loading="lazy"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
