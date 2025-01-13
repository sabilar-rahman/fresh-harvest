import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className=" ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className=" ">
            {isRegister ? "Register" : "Sign In"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-center font-bold text-2xl text-gray-800">
              {isRegister ? "Register" : "Login"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {isRegister && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
               
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
              
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center items-center mt-4">
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg"
              type="submit"
            >
              {isRegister ? "Register" : "Login"}
            </Button>
          </DialogFooter>
          <hr className="my-4 border-gray-300" />
          <div className="text-center text-sm text-gray-600">
            {isRegister ? (
              <span>
                Already have an account?{" "}
                <button
                  onClick={() => setIsRegister(false)}
                  className="font-bold text-orange-600 hover:underline"
                >
                  Login
                </button>
              </span>
            ) : (
              <span>
                Do not have an account?{" "}
                <button
                  onClick={() => setIsRegister(true)}
                  className="font-bold text-orange-600 hover:underline"
                >
                  Register
                </button>
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignIn;
