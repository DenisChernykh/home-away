"use client";

import { toast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";
import { FormEvent, useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { message: "" };

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
