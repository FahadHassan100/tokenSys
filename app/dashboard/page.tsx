"use client";

import { useSession } from "next-auth/react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ModalSplitCommission from "../components/Modal";
import { useEffect, useState } from "react";
import Image from "next/image";

type ClientOrderTwo = Record<string, unknown>;

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [clientOrder, setClientOrder] = useState<ClientOrderTwo[] | null>(null);
  const { data: session } = useSession(); // Fetch session data in client-side

  useEffect(() => {
    //session?.user?.email
    console.log(session?.user);
    setTransferred(session?.user?.transfer_status);
  }, [session]);

  const openModel = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modalOpen");
  };

  const handleChangeBtn = () => {
    setTransferred(1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Justice Trading DGCs Redemption and Transfer for Tokens
      </h1>

      <div className="my-8 flex justify-between w-[40%]">
        <div className="w-[200px]">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">
                Transfer To: KAMASHINANI FOUNDATION,Maua I Ruiri Junction,P.O
                Box 37-60202 Nkubu, Meru County, Kenya
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          {transferred === 0 ? (
            <button
              className="border-2 px-4 py-3 rounded-lg hover:bg-cyan-600 hover:text-white"
              onClick={openModel}
            >
              Convert DGC to tokens and transfer
            </button>
          ) : (
            <p className="text-green-600 font-bold my-4 mr-20">Transferred</p>
          )}
        </div>
      </div>

      <ul className="space-y-4">
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00012.19.1</span>
        </li>
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00008.19.1</span>
        </li>
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00005.19.1</span>
        </li>
      </ul>
      <div className="models">
        {showModal && (
          <ModalSplitCommission
            closeModal={closeModal}
            changeBtn={handleChangeBtn}
          />
        )}
      </div>
    </div>
  );
}
