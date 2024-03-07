"use client";

import React from "react";
import { useDisclosure } from "@nextui-org/use-disclosure";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imageRocket, imageAstrnaut } from "@/assets/page";
import styled from "../../styles/UnusualCarrosel.module.css";
import { title } from "process";

const items = [
  {
    id: 1,
    title: "Unusual Rockets",
    text: "Red , yellow , blue and another colors and types of rockets.",
    imageUrl: imageRocket,
  },
  {
    id: 2,
    title: "Our pilots",
    text: "Our pilots are very serious and also funny people, who can make for you space trip",
    imageUrl: imageAstrnaut,
  },
];

export default function UnusualCarrosel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={styled.container}>
      {items.map((item) => {
        return (
          <>
            <div className={styled.section}>
              {/* <Image
                src={item.imageUrl}
                width={500}
                height={500}
                alt=""
                className={styled.images}
              /> */}
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {/* <button className={styled.btn}>See More</button> */}
              <Button onPress={onOpen} className={styled.btn}>
                See More
              </Button>
            </div>
            
          </>
        );
      })}
      
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={styled.modal}>
                <ModalContent className={styled.modalContent}>
                  {(onClose) => (
                    <>
                      <ModalHeader className={styled.modalHeader}>Modal Title</ModalHeader>
                      <ModalBody>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nullam pulvinar risus non risus hendrerit venenatis.
                          Pellentesque sit amet hendrerit risus, sed porttitor
                          quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nullam pulvinar risus non risus hendrerit venenatis.
                          Pellentesque sit amet hendrerit risus, sed porttitor
                          quam.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button onPress={onClose} className={styled.close}>Close</Button>
                        <Button onPress={onClose}>Action</Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
    </div>
  );
}
