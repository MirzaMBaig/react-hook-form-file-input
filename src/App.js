import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Stack, TextField, PrimaryButton } from "@fluentui/react";

function App() {
  const { register, handleSubmit, control, errors } = useForm();

  useEffect(() => {
    register({ name: "uploadResource" });
  }, [register]);

  const onSubmit = (data) => {

    //this has just the file name not any file object to upload to server
    console.log(data);
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Controller
            as={<TextField />}
            label="Upload Resource"
            control={control}
            placeholder="Upload Resource"
            name="uploadResource"
            type="file"
          />
          {errors.uploadResource && "uploadResource is required"}

          <Stack.Item align={"center"}>
            <PrimaryButton text="submit" type="submit" checked={true} />
          </Stack.Item>
        </Stack>
      </form>
    </Stack>
  );
}

export default App;
