import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <Dialog>
        {/* <DialogTrigger asChild>
          <Button variant="outline" className="px-6 py-2 font-semibold text-lg">
            Register Here
          </Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-center font-bold text-2xl text-gray-800">
              Login
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="font-medium text-gray-700">
                Full Name
              </Label>
              <Input
                id="Name"
                placeholder="Enter your name"
                className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center items-center mt-4">
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg"
              type="submit"
            >
              Login
            </Button>
          </DialogFooter>
          <hr className="my-4 border-gray-300" />
          <DialogDescription className="text-center text-sm text-gray-600">
            Do not have an account?{" "}
            <button className="font-bold text-orange-600 hover:underline">
              Sign Up
            </button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
