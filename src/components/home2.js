import React from "react";
import { NavLink } from "react-router-dom";
import textmonia from "../image/textmonia.png";
import objective1 from "../image/textmonia (4).png";
import objective2 from "../image/textmonia (6).png";
import objective3 from "../image/textmonia (2).png";
import objective4 from "../image/textmonia (3).png";
import landpcover from "../image/Group.png";
import { motion, useScroll } from "framer-motion";

function Home2() {
  const scrollYProgress = useScroll();
  console.log(scrollYProgress);

  return (
    <div className="flex  flex-col justify-center items-center ">
      <div className=" bg-[#12384E] boder flex justify-center flex-col h-[87vh]  w-full">
        <div className="flex  justify-center bg-cover mt-2  ">
          <img
            className=" h-[60vh] w-[auto] "
            alt="court symbol png"
            src={landpcover}
          />
        </div>
        <div className=" flex justify-center -mt-[25vh] relative">
          <div className="flex flex-col w-[350px] h-[200px] ">
            <div className="flex  flex-col justify-center w-[350px] pt-6 h-[190px]  bg-cover bg-letus">
              <div className="flex justify-center">
                <svg
                  width="73"
                  height="69"
                  viewBox="0 0 73 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.9528 14.2508C59.3604 7.62255 49.5075 6.26106 41.5178 10.0589L38.0782 6.61935C37.7467 6.2872 37.353 6.02369 36.9196 5.8439C36.4862 5.66411 36.0215 5.57156 35.5523 5.57156C35.0831 5.57156 34.6184 5.66411 34.185 5.8439C33.7516 6.02369 33.3579 6.2872 33.0264 6.61935L32.7398 6.9418C32.2382 3.46644 29.2644 0.779297 25.6815 0.779297C21.7404 0.779297 18.5158 4.00386 18.5158 7.945C18.5158 8.26746 18.5158 8.58992 18.6233 8.87655C16.4378 10.1305 14.933 12.4236 14.933 15.1107C14.933 16.7588 15.5062 18.2278 16.4378 19.446C15.9782 19.7623 15.6015 20.1847 15.3395 20.6773C15.0776 21.17 14.9382 21.7185 14.933 22.2764V27.1133C6.58493 30.0512 0.601562 38.0051 0.601562 47.3564C0.601562 59.2156 10.2394 68.8535 22.0987 68.8535C33.9579 68.8535 43.5958 59.2156 43.5958 47.3564C43.596 42.9139 42.2175 38.5807 39.6505 34.9549C37.0835 31.3291 33.4546 28.5892 29.2644 27.1133V22.2764C29.2592 21.7185 29.1197 21.17 28.8578 20.6773C28.5959 20.1847 28.2192 19.7623 27.7596 19.446C28.6911 18.2278 29.2644 16.7588 29.2644 15.1107C29.2644 14.7883 29.2644 14.4658 29.1569 14.1792C29.8018 13.8209 30.3393 13.3193 30.805 12.8893C34.1371 14.6808 36.4301 18.192 36.4301 22.2764V22.563C36.8959 22.8138 37.3258 23.1721 37.7916 23.4588C38.4723 21.954 39.4039 20.485 40.622 19.3026C43.3139 16.6186 46.9602 15.1113 50.7615 15.1113C54.5629 15.1113 58.2092 16.6186 60.901 19.3026C63.5851 21.9945 65.0923 25.6408 65.0923 29.4421C65.0923 33.2435 63.5851 36.8898 60.901 39.5816C58.0347 42.4479 54.3444 43.7735 50.5107 43.7735C50.7615 44.9201 50.7615 46.1382 50.7615 47.3564C50.7615 48.5746 50.654 49.7569 50.5107 50.9392C56.1358 50.9392 61.6892 48.897 65.9528 44.6334C67.9543 42.6421 69.5426 40.275 70.6263 37.668C71.7101 35.0609 72.268 32.2654 72.268 29.4421C72.268 26.6188 71.7101 23.8233 70.6263 21.2163C69.5426 18.6093 67.9543 16.2421 65.9528 14.2508ZM25.6815 4.36215C27.6521 4.36215 29.2644 5.97443 29.2644 7.945C29.2644 9.12735 28.6553 10.1305 27.7596 10.7755C26.4698 9.05569 24.4275 7.945 22.0987 7.945C22.0987 5.97443 23.711 4.36215 25.6815 4.36215ZM20.0206 12.2803C21.3105 14 23.3527 15.1107 25.6815 15.1107C25.6815 17.0813 24.0693 18.6936 22.0987 18.6936C20.1281 18.6936 18.5158 17.0813 18.5158 15.1107C18.5158 13.9284 19.1249 12.9252 20.0206 12.2803ZM36.4301 47.3564C36.4301 55.2745 30.0168 61.6878 22.0987 61.6878C14.1806 61.6878 7.76727 55.2745 7.76727 47.3564C7.76727 39.4383 14.1806 33.025 22.0987 33.025C30.0168 33.025 36.4301 39.4383 36.4301 47.3564Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex justify-center text-xl text-white font-bold">
                C.R.S
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  text-white">
          <div className="w-[450px] text-center">
            Our website offers a simple and easy-to-use reporting system that
            allows users to report crimes quickly and efficiently.
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <NavLink to="/signIn">
            <button className=" flex  justify-center text-md items-center rounded-full font-bold bg-white text-[#12384E] h-[50px] w-[350px] hover:opacity-90 duration-150 hover:scale-x-110 ">
              Join our community
            </button>
          </NavLink>
        </div>
      </div>
      {/* rounded cards */}
      <motion.div className=" w-full grad   flex justify-between px-10 py-10 flex-row">
        {/* start cards */}
        <div className="w-[300px] h-[420px] flex  justify-between flex-col items-center  ">
          <div className="py-2">
            <div className=" flex bg-reportsvg w-[300px] h-[300px] bg-cover justify-center items-center  bg-center rounded-full">
              <div className="flex justify-center items-center  w-[150px] h-[150px] mt-[250px] rounded-full bg-white shadow-xl">
                <svg
                  className=" w-[80px] h-[80px]"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.3775 1.97515C56.8843 0.666479 59.6722 -0.0114217 62.5 0.000145583C65.7965 0.000133306 69.0259 0.931189 71.8164 2.68609C74.6069 4.441 76.845 6.94839 78.273 9.91951C79.7009 12.8906 80.2607 16.2047 79.8877 19.4799C79.5148 22.7552 78.2244 25.8586 76.165 28.4326L75.9325 28.7876C74.1156 31.5468 72.9812 34.6986 72.623 37.9828C72.2648 41.2669 72.6931 44.5892 73.8725 47.6751L79.3275 62.0526L79.3975 62.2351L79.45 62.4226C80.0909 64.6128 80.1742 66.9284 79.6925 69.159C79.2107 71.3895 78.179 73.4643 76.6913 75.1947C75.2037 76.9251 73.3071 78.2562 71.174 79.0671C69.0409 79.8779 66.739 80.1428 64.4775 79.8376L47.165 77.5001H44.96C42.9614 77.5032 40.9916 77.0244 39.2173 76.1044C37.4431 75.1844 35.9167 73.8503 34.7675 72.2151C32.3601 72.6743 29.8787 72.563 27.5221 71.89C25.1655 71.2171 22.9994 70.0013 21.1975 68.3401C18.9898 69.4979 16.5206 70.0658 14.0289 69.989C11.5373 69.9122 9.10773 69.1932 6.97556 67.9017C4.84339 66.6102 3.0809 64.7899 1.85881 62.6172C0.636713 60.4445 -0.00355695 57.993 1.48627e-05 55.5001V34.5001C0.000117711 32.4134 0.450608 30.3513 1.32072 28.4547C2.19082 26.5581 3.46005 24.8716 5.04169 23.5104C6.62334 22.1493 8.48014 21.1455 10.4853 20.5677C12.4904 19.99 14.5966 19.8518 16.66 20.1626C16.7875 20.1776 16.9175 20.1851 17.0475 20.1876C17.4175 20.1876 17.8925 19.7976 18.4575 19.0476C19.8659 16.7677 21.8327 14.8849 24.1719 13.5773C26.5111 12.2697 29.1452 11.5806 31.825 11.5751C33.339 11.582 34.8448 11.7973 36.3 12.2151C37.0175 11.9326 37.72 11.6126 38.4 11.2501C41.0433 8.83682 44.4958 7.50309 48.075 7.51265H48.115C49.7217 5.18618 51.8713 3.28386 54.3775 1.97515ZM71.3375 8.66265C69.554 6.87953 67.2728 5.67762 64.7937 5.21479C62.3145 4.75196 59.7533 5.04986 57.4466 6.06937C55.1399 7.08887 53.1955 8.7823 51.8688 10.9272C50.5422 13.072 49.8954 15.568 50.0134 18.0873C50.1314 20.6065 51.0086 23.0311 52.5299 25.0426C54.0512 27.0541 56.1454 28.5584 58.5373 29.3578C60.9292 30.1573 63.507 30.2145 65.9321 29.522C68.3571 28.8295 70.516 27.4196 72.125 25.4776L72.1275 25.4726C72.7852 24.6822 73.342 23.8131 73.785 22.8851C74.5966 21.2067 75.0122 19.3644 75 17.5001C74.9993 14.1852 73.6819 11.0063 71.3375 8.66265ZM74.175 62.5676C73.4725 61.0754 72.36 59.8139 70.9673 58.9303C69.5746 58.0467 67.9593 57.5776 66.31 57.5776H45.8875C43.6798 57.5775 41.5611 58.4478 39.9909 59.9997C38.4207 61.5517 37.5257 63.6601 37.5 65.8676C37.5142 65.8593 37.5283 65.8509 37.5425 65.8427C37.741 67.6715 38.6079 69.3625 39.9769 70.5913C41.3459 71.82 43.1205 72.4998 44.96 72.5001H47.5L65.1475 74.8826C66.5827 75.0743 68.043 74.9048 69.396 74.3894C70.7491 73.874 71.9522 73.0291 72.8961 71.9312C73.8401 70.8333 74.4951 69.5172 74.8018 68.1021C75.1085 66.6871 75.0572 65.2178 74.6525 63.8276L74.175 62.5676ZM35.05 67.0001C34.8899 65.3438 35.1126 63.6729 35.7008 62.1163C36.289 60.5597 37.227 59.1591 38.4425 58.0226V30.3251C38.4345 30.1342 38.4652 29.9435 38.5327 29.7647C38.6003 29.5859 38.7033 29.4226 38.8356 29.2846C38.9679 29.1466 39.1268 29.0368 39.3026 28.9618C39.4784 28.8868 39.6676 28.8481 39.8588 28.8481C40.0499 28.8481 40.2391 28.8868 40.4149 28.9618C40.5908 29.0368 40.7496 29.1466 40.8819 29.2846C41.0142 29.4226 41.1172 29.5859 41.1848 29.7647C41.2524 29.9435 41.283 30.1342 41.275 30.3251V56.1002C42.7187 55.4245 44.2936 55.0754 45.8875 55.0776H57.5V31.6501C53.7511 30.3249 50.6815 27.5658 48.9654 23.979C47.2493 20.3921 47.0271 16.2707 48.3475 12.5201C47.0464 12.4811 45.7514 12.713 44.5446 13.2011C43.3379 13.6891 42.2457 14.4226 41.3375 15.3551C39.7197 16.2995 37.9593 16.9749 36.125 17.3551C35.9741 17.359 35.8236 17.337 35.68 17.2901L35.4475 17.2026C34.2842 16.7897 33.0594 16.5767 31.825 16.5726C29.9672 16.5711 28.1411 17.0546 26.5275 17.9754C24.9139 18.8962 23.5687 20.2223 22.625 21.8226C22.0634 22.8144 21.256 23.6449 20.2805 24.2343C19.305 24.8236 18.1942 25.1519 17.055 25.1876C16.7091 25.1846 16.3636 25.1629 16.02 25.1226C14.6616 24.9025 13.2716 24.98 11.9461 25.35C10.6207 25.7199 9.39139 26.3734 8.34335 27.2652C7.29532 28.1571 6.45355 29.2659 5.87628 30.5151C5.29902 31.7643 5.00003 33.124 5.00001 34.5001V55.5001C5.00238 56.9876 5.35398 58.4537 6.02652 59.7804C6.69906 61.1072 7.67374 62.2574 8.87209 63.1386C10.0704 64.0198 11.4589 64.6073 12.9258 64.8537C14.3927 65.1002 15.897 64.9988 17.3175 64.5576C19.2175 63.9676 22.085 61.2076 22.085 61.2076C22.085 61.2076 21.15 59.4601 21.15 56.8251V34.3076C21.15 33.9317 21.2994 33.5712 21.5652 33.3053C21.831 33.0395 22.1916 32.8901 22.5675 32.8901C22.9435 32.8901 23.304 33.0395 23.5698 33.3053C23.8357 33.5712 23.985 33.9317 23.985 34.3076V56.8251C23.9856 59.4102 24.9239 61.9073 26.6259 63.8529C28.3279 65.7986 30.678 67.0608 33.24 67.4052L33.28 67.4001C33.8794 67.318 34.4707 67.185 35.0475 67.0026L35.05 67.0001Z"
                    fill="#377D97"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex text-xl justify-center">
            <button>Report crimes</button>
          </div>
        </div>
        {/* end card */}

        {/* start cards */}
        <div className="w-[300px] h-[420px]  flex  justify-between flex-col items-center  ">
          <div className="p-2">
            <div className=" flex bg-reportsvg2 w-[300px] h-[300px] bg-cover justify-center items-center  bg-center rounded-full">
              <div className="flex justify-center items-center  w-[150px] h-[150px] mt-[250px] rounded-full bg-white shadow-xl">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0C62.092 0 80 17.908 80 40C80 62.092 62.092 80 40 80C17.908 80 0 62.092 0 40C0 17.908 17.908 0 40 0ZM40 5.58C30.8712 5.58 22.1164 9.20638 15.6614 15.6614C9.20638 22.1164 5.58 30.8712 5.58 40C5.58 49.1288 9.20638 57.8836 15.6614 64.3386C22.1164 70.7936 30.8712 74.42 40 74.42C49.1288 74.42 57.8836 70.7936 64.3386 64.3386C70.7936 57.8836 74.42 49.1288 74.42 40C74.42 30.8712 70.7936 22.1164 64.3386 15.6614C57.8836 9.20638 49.1288 5.58 40 5.58ZM39.42 28.84C40.96 28.84 42.208 30.092 42.208 31.632V61.864C42.1807 62.5857 41.8748 63.2687 41.3545 63.7696C40.8343 64.2705 40.1402 64.5503 39.418 64.5503C38.6958 64.5503 38.0017 64.2705 37.4815 63.7696C36.9612 63.2687 36.6553 62.5857 36.628 61.864V31.628C36.628 30.088 37.876 28.84 39.42 28.84ZM39.532 17.68C40.5186 17.68 41.4648 18.0719 42.1624 18.7696C42.8601 19.4672 43.252 20.4134 43.252 21.4C43.252 22.3866 42.8601 23.3328 42.1624 24.0304C41.4648 24.7281 40.5186 25.12 39.532 25.12C38.5454 25.12 37.5992 24.7281 36.9016 24.0304C36.2039 23.3328 35.812 22.3866 35.812 21.4C35.812 20.4134 36.2039 19.4672 36.9016 18.7696C37.5992 18.0719 38.5454 17.68 39.532 17.68Z"
                    fill="#377D97"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex text-xl justify-center">
            <button>Provide information</button>
          </div>
        </div>
        {/* end card */}
        {/* start cards */}
        <div className="w-[300px] h-[420px]  flex  justify-between flex-col items-center  ">
          <div className="p-2">
            <div className=" flex bg-reportsvg3 w-[300px] h-[300px] bg-cover justify-center items-center  bg-center rounded-full">
              <div className="flex justify-center items-center  w-[150px] h-[150px] mt-[250px] rounded-full bg-white shadow-xl">
                <svg
                  width="65"
                  height="71"
                  viewBox="0 0 65 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.3548 0.0749277C44.9979 0.235543 45.5508 0.644948 45.8921 1.21314C46.2334 1.78132 46.3351 2.46179 46.1748 3.10493L44.9248 8.10493C44.8517 8.42998 44.7143 8.73713 44.5208 9.00832C44.3272 9.27952 44.0814 9.5093 43.7978 9.68415C43.5142 9.859 43.1985 9.9754 42.8693 10.0265C42.5401 10.0776 42.2039 10.0624 41.8807 9.98174C41.5574 9.90109 41.2535 9.75663 40.9869 9.55687C40.7202 9.3571 40.4962 9.10605 40.328 8.81847C40.1597 8.53089 40.0507 8.21258 40.0072 7.88225C39.9637 7.55193 39.9867 7.21624 40.0748 6.89493L41.3248 1.89493C41.4855 1.25187 41.8949 0.69892 42.463 0.357632C43.0312 0.0163438 43.7117 -0.0853427 44.3548 0.0749277ZM59.2698 5.73493C59.7385 6.20375 60.0018 6.83952 60.0018 7.50243C60.0018 8.16534 59.7385 8.80111 59.2698 9.26993L54.2698 14.2699C54.0392 14.5087 53.7634 14.6992 53.4583 14.8302C53.1533 14.9612 52.8253 15.0302 52.4933 15.0331C52.1614 15.0359 51.8322 14.9727 51.5249 14.847C51.2177 14.7213 50.9386 14.5356 50.7038 14.3009C50.4691 14.0662 50.2835 13.7871 50.1578 13.4798C50.0321 13.1726 49.9688 12.8434 49.9717 12.5114C49.9746 12.1795 50.0436 11.8514 50.1746 11.5464C50.3056 11.2414 50.4961 10.9655 50.7348 10.7349L55.7348 5.73493C56.2037 5.26625 56.8394 5.00296 57.5023 5.00296C58.1652 5.00296 58.801 5.26625 59.2698 5.73493ZM21.4198 60.1649C22.6746 62.254 24.6491 63.813 26.9722 64.549C29.2954 65.2849 31.8074 65.1473 34.0362 64.1618C36.265 63.1763 38.0572 61.4109 39.0762 59.1972C40.0952 56.9835 40.2707 54.4739 39.5698 52.1399L21.4198 60.1649ZM16.8198 62.1949L11.8298 64.4049C10.5388 64.9753 9.10544 65.142 7.71793 64.8832C6.33042 64.6245 5.05354 63.9523 4.05484 62.9549L2.05483 60.9599C1.05855 59.968 0.385493 58.6981 0.12404 57.3167C-0.137413 55.9354 0.0249588 54.5073 0.589835 53.2199L19.9448 9.17993C20.4034 8.13995 21.1084 7.22728 21.9988 6.5208C22.8891 5.81432 23.9381 5.33527 25.0551 5.12507C26.1721 4.91486 27.3235 4.97981 28.4098 5.31431C29.4961 5.64881 30.4846 6.24279 31.2898 7.04493L57.9498 33.6249C58.753 34.426 59.3487 35.4108 59.6852 36.4941C60.0217 37.5774 60.089 38.7264 59.8811 39.8416C59.6733 40.9567 59.1966 42.0043 58.4924 42.8936C57.7881 43.7829 56.8777 44.487 55.8398 44.9449L44.1648 50.1049C45.399 53.6617 45.2505 57.5525 43.7489 61.0048C42.2473 64.4572 39.5025 67.2187 36.0592 68.741C32.616 70.2634 28.7262 70.4353 25.162 69.2226C21.5979 68.0099 18.6201 65.5014 16.8198 62.1949ZM62.4998 19.9999H57.4998C56.8368 19.9999 56.2009 20.2633 55.7321 20.7322C55.2632 21.201 54.9998 21.8369 54.9998 22.4999C54.9998 23.163 55.2632 23.7989 55.7321 24.2677C56.2009 24.7365 56.8368 24.9999 57.4998 24.9999H62.4998C63.1629 24.9999 63.7988 24.7365 64.2676 24.2677C64.7364 23.7989 64.9998 23.163 64.9998 22.4999C64.9998 21.8369 64.7364 21.201 64.2676 20.7322C63.7988 20.2633 63.1629 19.9999 62.4998 19.9999ZM24.5248 11.1899L5.16483 55.2299C5.00477 55.5942 4.95874 55.9984 5.03282 56.3893C5.1069 56.7802 5.2976 57.1395 5.57983 57.4199L7.58483 59.4199C7.87054 59.7039 8.23534 59.895 8.63146 59.9681C9.02757 60.0413 9.43655 59.9931 9.80483 59.8299L53.8148 40.3699C54.1079 40.2402 54.365 40.0412 54.564 39.7899C54.763 39.5387 54.8978 39.2428 54.9568 38.9278C55.0159 38.6128 54.9974 38.2882 54.903 37.9819C54.8086 37.6757 54.641 37.397 54.4148 37.1699L27.7648 10.5799C27.5354 10.3518 27.2541 10.1828 26.9449 10.0873C26.6358 9.99185 26.3081 9.9728 25.99 10.0318C25.6719 10.0908 25.3729 10.2261 25.1186 10.4261C24.8642 10.626 24.6622 10.8847 24.5298 11.1799L24.5248 11.1899Z"
                    fill="#377D97"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex text-xl justify-center">
            <button>Public alerts</button>
          </div>
        </div>
        {/* end card */}
        {/* start cards */}
        <div className="w-[300px] h-[420px]  flex  justify-between flex-col items-center  ">
          <div className="p-2">
            <div className=" flex bg-reportsvg4 w-[300px] h-[300px] bg-cover justify-center items-center  bg-center rounded-full">
              <div className="flex justify-center items-center  w-[150px] h-[150px] mt-[250px] rounded-full bg-white shadow-xl">
                <svg
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M74.5637 32.9483C74.2146 25.0079 71.0418 17.4531 65.6165 11.6447L64.4481 10.4603C63.6318 9.67598 62.8475 8.85969 61.9032 8.21946C60.9588 7.57923 60.2066 6.923 59.1662 6.26677C53.7572 2.80505 47.4697 0.965332 41.0478 0.965332C34.6259 0.965332 28.3383 2.80505 22.9293 6.26677C21.965 6.86481 21.0352 7.51674 20.1443 8.21946C19.2614 8.89685 18.4221 9.62923 17.6314 10.4122C17.1993 10.8124 16.7991 11.2285 16.415 11.6447L16.2229 11.8848C10.9048 17.6535 7.7881 25.1108 7.41981 32.9483H7.33978C5.64179 32.9483 4.01334 33.6228 2.81268 34.8234C1.61202 36.0241 0.9375 37.6525 0.9375 39.3505V50.5545C0.9375 52.2525 1.61202 53.8809 2.81268 55.0816C4.01334 56.2823 5.64179 56.9568 7.33978 56.9568H10.829C11.2131 58.0154 11.9571 58.9053 12.9308 59.4709C13.9045 60.0366 15.0461 60.242 16.1559 60.0513C17.2657 59.8606 18.2732 59.2859 19.0023 58.4277C19.7314 57.5695 20.1356 56.4823 20.1443 55.3562V34.5488C20.1356 33.4228 19.7314 32.3356 19.0023 31.4773C18.2732 30.6191 17.2657 30.0444 16.1559 29.8537C15.0461 29.663 13.9045 29.8685 12.9308 30.4341C11.9571 30.9998 11.2131 31.8897 10.829 32.9483H10.6209C10.9533 26.3316 13.4565 20.0088 17.7435 14.9579C19.0453 15.7988 20.5633 16.2436 22.113 16.2383C23.6103 16.2355 25.0779 15.8202 26.3545 15.0379L26.4986 14.9419C26.5734 14.9087 26.6434 14.8656 26.7067 14.8138C27.4439 14.3048 28.2138 13.845 29.0115 13.4373L29.9238 12.9892C30.484 12.7171 30.9962 12.493 31.5244 12.2849C32.1055 12.051 32.6985 11.848 33.301 11.6767L34.2453 11.4046C34.5281 11.3147 34.817 11.2452 35.1097 11.1965C36.6194 10.8474 38.1562 10.6278 39.7033 10.5403C40.4235 10.5403 41.3039 10.5403 42.1682 10.5403C43.7206 10.6065 45.2637 10.8154 46.7778 11.1645L47.6101 11.3726C48.5464 11.6106 49.4661 11.91 50.3631 12.2689C50.9083 12.482 51.4425 12.7224 51.9636 12.9892L52.828 13.4213L53.9484 14.0455C54.3325 14.2696 54.7006 14.5097 55.0527 14.7498L55.2288 14.8618L55.3889 14.9579C56.684 15.7644 58.1828 16.1838 59.7084 16.1668C61.2341 16.1498 62.7231 15.697 63.9999 14.8618C68.3955 19.9052 70.986 26.2689 71.3625 32.9483H71.1545C70.8174 31.8264 70.0819 30.8665 69.0865 30.2492C68.091 29.6319 66.9042 29.3997 65.7495 29.5964C64.5947 29.7931 63.5518 30.4052 62.8168 31.3173C62.0819 32.2294 61.7057 33.3787 61.7591 34.5488V55.3562C61.7591 56.6297 62.265 57.851 63.1655 58.7515C64.066 59.652 65.2873 60.1579 66.5608 60.1579C67.1064 60.1644 67.6486 60.0722 68.1614 59.8858C67.8244 64.7461 65.6531 69.2967 62.0869 72.6162C58.5208 75.9356 53.8265 77.7759 48.9546 77.7642H47.354V74.5631C47.354 73.2968 46.9785 72.059 46.275 71.0061C45.5715 69.9533 44.5716 69.1327 43.4018 68.6481C42.2319 68.1635 40.9446 68.0368 39.7027 68.2838C38.4608 68.5308 37.32 69.1406 36.4246 70.036C35.5293 70.9313 34.9195 72.0721 34.6725 73.314C34.4254 74.556 34.5522 75.8432 35.0368 77.0131C35.5214 78.183 36.342 79.1829 37.3948 79.8864C38.4477 80.5898 39.6855 80.9653 40.9517 80.9653H48.9546C54.8975 80.9653 60.5971 78.6045 64.7994 74.4022C69.0017 70.1999 71.3625 64.5003 71.3625 58.5574V56.9568H74.5637C76.2617 56.9568 77.8901 56.2823 79.0908 55.0816C80.2914 53.8809 80.966 52.2525 80.966 50.5545V39.3505C80.966 37.6525 80.2914 36.0241 79.0908 34.8234C77.8901 33.6228 76.2617 32.9483 74.5637 32.9483ZM48.4904 8.3315H48.3624H48.2183H47.9622L48.3624 8.42754L48.8906 8.58759L48.4904 8.3315Z"
                    fill="#377D97"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex text-xl justify-center">
            <button>Service Center</button>
          </div>
        </div>
        {/* end card */}
      </motion.div>
      {/* testimonia */}

      <div className=" flex bg-[#FFA336] flex-col items-center w-full px-30 text-[#377D97] justify-center">
        <div className="flex justify-center pb-8 text-[2em] text-[#377D97]  font-bold">
          Feedback from our users
        </div>
        <div className=" flex  px-10 py-3 w-full justify-between items-center">
          <div className=" flex  justify-center">
            <button className="flex  justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow">
              <svg
                width="41"
                height="26"
                viewBox="0 0 41 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9062 25.5522C19.6006 26.0036 20.3034 26.0299 21.0145 25.6313C21.7256 25.2327 22.0819 24.6161 22.0832 23.7813V15.0834H38.7499C39.3402 15.0834 39.8353 14.8834 40.2353 14.4834C40.6353 14.0834 40.8346 13.589 40.8332 13.0001C40.8332 12.4098 40.6332 11.9147 40.2332 11.5147C39.8332 11.1147 39.3388 10.9154 38.7499 10.9168H22.0832V2.21884C22.0832 1.3855 21.727 0.768835 21.0145 0.368835C20.302 -0.0311645 19.5992 -0.00477543 18.9062 0.448002L1.927 11.2293C1.26728 11.6459 0.937412 12.2362 0.937412 13.0001C0.937412 13.764 1.26728 14.3543 1.927 14.7709L18.9062 25.5522Z"
                  fill="#377D97"
                />
              </svg>
            </button>
          </div>
          <div className=" flex  rounded-full  bg-white w-[430px] items-center h-[430px] justify-center p-2 object-cover shadow-lg shadow-gray-700">
            <img
              className=" flex w-[400px]  h-[400px] justify-center object-fill"
              alt="textmonial"
              src={textmonia}
            />
          </div>
          <div className=" flex flex-col p-4 pl-20 justify-center">
            <div className=" text-xl">LINDA R. NOWAK</div>
            <div className="w-[400px]">
              "Thank you for providing such valuable information about local crime activity. Your reports are always detailed and informative, and I appreciate how quickly you update them with new information. I feel like I have a better understanding of the types of crimes that are happening in my area, which helps me take steps to protect myself and my property. Keep up the good work!"
            </div>
          </div>
          <div className=" flex  justify-center">
            <button className="flex  justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow">
              <svg
                width="41"
                height="26"
                viewBox="0 0 41 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0936 25.5522C21.3991 26.0036 20.6964 26.0299 19.9853 25.6313C19.2741 25.2327 18.9179 24.6161 18.9165 23.7813V15.0834H2.24984C1.65957 15.0834 1.16443 14.8834 0.764428 14.4834C0.364428 14.0834 0.165122 13.589 0.166511 13.0001C0.166511 12.4098 0.366511 11.9147 0.766511 11.5147C1.16651 11.1147 1.66096 10.9154 2.24984 10.9168H18.9165V2.21884C18.9165 1.3855 19.2728 0.768835 19.9853 0.368835C20.6978 -0.0311645 21.4005 -0.00477543 22.0936 0.448002L39.0728 11.2293C39.7325 11.6459 40.0623 12.2362 40.0623 13.0001C40.0623 13.764 39.7325 14.3543 39.0728 14.7709L22.0936 25.5522Z"
                  fill="#377D97"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center py-7">
          <div className="bg-black rounded w-[45px] h-[12px] mr-8"></div>
          <div className="bg-black rounded w-[45px] h-[12px]"></div>
          <div className="bg-black rounded w-[45px] h-[12px] ml-8"></div>
        </div>
      </div>
      {/* our objctive */}
      <div className=" flex bg-[#12384E] flex-col items-center w-full px-[10px] text-[#377D97] justify-center">
        <div className="flex justify-center pb-8 text-[2em] text-[#377D97]  font-bold">
          Our objective
        </div>
        <div className=" flex  px-10 py-3 w-full justify-between">
          <div className=" w-1/2 flex flex-col p-4 justify-center">
            <div>
           The goal of our society is to provide information about criminal activity to the public, law enforcement agencies, and other relevant parties. The primary goal is to inform the public about criminal activity in their area, raise awareness about the types of crimes being committed, and help people take measures to protect themselves and their property.

Crime reports also play a crucial role in assisting law enforcement agencies in their investigations. They provide information about the type of crime, location, time, and other details that can help identify suspects and solve cases. Crime reports can also be used to track crime trends and patterns, which can help law enforcement agencies allocate resources and develop strategies to prevent and reduce crime.

Additionally, crime reports can be used to inform policymakers and other stakeholders about the effectiveness of current crime prevention strategies and to identify areas where additional resources may be needed. By providing accurate and timely information about criminal activity, crime reports can help promote public safety and support the overall well-being of society.

            </div>
          </div>
          <div className=" flex h-[620px] w-1/2 justify-center p-2 object-cover ">
            <img
              className=" absolute w-[240px]  h-[524px] object-fill"
              alt="textmonial"
              src={objective1}
            />
            <img
              className=" absolute w-[200px]  h-[284px] -ml-[290px] mt-[70px] object-fill"
              alt="textmonial"
              src={objective2}
            />
            <img
              className=" absolute w-[170px]  h-[284px] ml-[210px] mt-[250px] object-fill"
              alt="textmonial"
              src={objective3}
            />
            <img
              className="absolute w-[170px]  h-[284px] -ml-[170px] mt-[320px] object-fil"
              alt="textmonial"
              src={objective4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
