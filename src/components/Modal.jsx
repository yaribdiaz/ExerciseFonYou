import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useCharacterStore } from '../hooks/useCharacterStore'

const Modal = () => {

    const {handleModal, openModal, modalData} = useCharacterStore()

  return (
    <Transition appear show={openModal} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={handleModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="uppercase text-2xl font-medium leading-6 text-white bg-black p-2 rounded-lg text-center" 
              >
                {modalData?.name}
              </Dialog.Title>
              <div className="mt-2 flex flex-row gap-3">
                    <div className='w-3/6 '>
                        <img src={modalData?.image} alt="" className='flex-1 animate-pulse rounded'/>
                    </div>
                    <div className='w-3/6 flex flex-col gap-3'>
                        <p className="text-xl text-gray-700 font-bold uppercase">
                            Gender:
                            <span className='font-normal ml-2'>{modalData?.gender}</span>
                        </p>
                        <p className="text-xl text-gray-700 font-bold uppercase">
                            Location:
                            <span className='font-normal ml-2'>{modalData.location?.name}</span>
                        </p>
                        <p className="text-xl text-gray-700 font-bold uppercase">
                            Origin:
                            <span className='font-normal ml-2'>{modalData.origin?.name}</span>
                        </p>
                        <p className="text-xl text-gray-700 font-bold uppercase">
                            Specie:
                            <span className='font-normal ml-2'>{modalData?.species}</span>
                        </p>
                        <p className="text-xl text-gray-700 font-bold uppercase">
                            Status:
                            <span className='font-normal ml-2 '>{modalData?.status}</span>
                        </p>
                    </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={handleModal}
                >
                  Cerrar
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default Modal
