"use client";

import { actionFunction } from "@/utils/types";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="mb-4 h-24 w-24 rounded-md bg-primary text-white" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="mb-4 h-24 w-24 rounded-md object-cover"
          alt={name}
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-lg">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
