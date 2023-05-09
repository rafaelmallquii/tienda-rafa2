import React from "react";
import Modal from "../@core/Modal";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Layout2() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="lg:hidden block">
        <Modal isOpenModal={openModal} setIsOpenModal={setOpenModal}>
          <div className="relative h-screen w-[40%] bg-blue-700 ">
            <h1>Modal</h1>
            <button
              onClick={() => setOpenModal(false)}
              className="btn absolute right-2 top-2 btn-sm btn-square "
            >
              <IoMdClose />
            </button>
          </div>
        </Modal>

        <div className="flex px-4 py-[12px] justify-between ">
          <div className="flex gap-4">
              <button onClick={() => setOpenModal(true)} className="">
                <img src="./icons/hamburguesa.svg" alt="boton" className="h-[30px] w-[24px]" />
              </button>

                <img
                  src="./img/logorafa1.svg"
                  alt="iamgen"
                  className=" h-11 pt-2 mt-3 "
                />
          </div>
            <ul className="mt-5 flex gap-6  text-[#000000] ">
              <li className="">
                <img src="./icons/user.svg" alt="user" className="h-6 " />
              </li>
              <li>
                <img
                  src="./icons/corazon.svg"
                  alt="user"
                  className="h-6 "
                />
              </li>
              <li>
                <img src="./icons/bolsa.svg" alt="user" className="h-6 " />
              </li>
            </ul>
           
        </div>
      </div>

      <div className=" lg:block hidden  container">
        <div className="flex py-5   justify-between  items-center">
          <ul className="flex">
            <li className="h-auto w-auto px-5 ">Atencion al cliente</li>
            <li className="h-auto w-auto px-5 ">Buscar tienda</li>
            <li className="h-auto w-auto px-5 ">Newsletter</li>
            <img src="./icons/puntos.svg" alt="user" className="h-6 mx-3" />
          </ul>
          <div className=" mt-10">
            <img src="./img/logorafa1.svg" alt="iamgen" className=" h-11  " />
          </div>
          <ul className="mt-5 flex text-[#000000] ont-size: .8125rem  w-[35%]">
            <li>
              <img src="./icons/user.svg" alt="user" className="h-6 mx-3" />
            </li>
            <li className="h-auto w-auto">Iniciar sesion</li>

            <li>
              <img src="./icons/corazon.svg" alt="user" className="h-6 mx-3" />
            </li>
            <li className=" h-auto w-auto">Favoritas</li>
            <li>
              <img src="./icons/bolsa.svg" alt="user" className="h-6 mx-3" />
            </li>
            <li className=" h-auto w-auto">Bolsa de la compra</li>
          </ul>
        </div>
        <div>
          <ul className="flex  ml-[20%]">
            <li className="px-4">Mujer</li>
            <li className="px-4">Hombre</li>
            <li className="px-4">Divided</li>
            <li className="px-4">Bebe</li>
            <li className="px-4">Niños</li>
            <li className="px-4">H&MHOME</li>
            <li className="px-4">Beauty</li>
            <li className="px-4">Sport</li>
            <li className="px-4">Sostenibilidad</li>

            <div className="relative border-b-[1px] border-black ">
              <img
                src="./icons/lupa.svg"
                alt="user"
                className="h-6  absolute select-none"
              />
              <input
                type="text"
                className="pl-[36px] outline-none"
                placeholder="Buscar productos"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
