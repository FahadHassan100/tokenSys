"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ModalSplitCommission from "../components/Modal";
import { useEffect, useState } from "react";
import { getUserByEmail } from "@/services/user";
import ThankyouModal from "../components/ThankyouModal";

//type ClientOrderTwo = Record<string, unknown>;

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [transferred, setTransferred] = useState(0);
  //const [showButton, setShowButton] = useState(false);
  //const [clientOrder, setClientOrder] = useState<ClientOrderTwo[] | null>(null);
  //const { data: session } = useSession(); // Fetch session data in client-side

  const bookletIds = [
    "PL.00188.23.1",
    "PL.00142.23.1",
    "PL.00081.23.1",
    "PL.00177.23.1",
    "PL.00354.23.1",
    "PL.00233.23.1",
    "PL.00069.23.1",
    "PL.00054.23.1",
    "PL.00016.23.1",
    "PL.00217.23.1",
    "PL.00184.23.1",
    "PL.00308.23.1",
    "PL.00214.23.1",
    "PL.00176.23.1",
    "PL.00123.23.1",
    "PL.00046.23.1",
    "PL.00086.23.1",
    "PL.00088.23.1",
    "PL.00235.23.1",
    "PL.00082.23.1",
    "PL.00304.23.1",
    "PL.00756.23.1",
    "PL.00770.23.1",
    "PL.00073.23.1",
    "PL.00099.23.1",
    "PL.00168.23.1",
    "PL.00335.23.1",
    "PL.00255.23.1",
    "PL.00786.23.1",
    "PL.00073.23.2",
    "PL.00207.23.1",
    "PL.00255.23.2",
    "PL.00365.23.1",
    "PL.00096.23.1",
    "PL.00102.23.1",
    "PL.00791.23.1",
    "PL.00306.23.1",
    "PL.00204.23.1",
    "PL.00328.23.1",
    "PL.00158.23.1",
    "PL.00068.23.1",
    "PL.00792.23.1",
    "PL.00793.23.1",
    "PL.00309.23.1",
    "PL.00090.23.1",
    "PL.00238.23.1",
    "PL.00799.23.1",
    "PL.00800.23.1",
    "PL.00087.23.1",
    "PL.00808.23.1",
    "PL.00253.23.1",
    "PL.00811.23.1",
    "PL.00812.23.1",
    "PL.00813.23.1",
    "PL.00089.23.1",
    "PL.00816.23.1",
    "PL.00077.23.1",
    "PL.00818.23.1",
    "PL.00239.23.1",
    "PL.00083.23.1",
    "PL.00820.23.1",
    "PL.00819.23.1",
    "PL.00366.23.1",
    "PL.00823.23.1",
    "PL.00824.23.1",
    "PL.00826.23.1",
    "PL.00308.23.2",
    "PL.00103.23.1",
    "PL.00322.23.1",
    "PL.00827.23.1",
    "PL.00325.23.1",
    "PL.00247.23.1",
    "PL.00829.23.1",
    "PL.00834.23.1",
    "PL.00133.23.1",
    "PL.00830.23.1",
    "PL.00831.23.1",
    "PL.00828.23.1",
    "PL.00832.23.1",
    "PL.00833.23.1",
    "PL.00068.23.2",
    "PL.00199.23.1",
    "PL.00092.23.1",
    "PL.00005.23.1",
    "PL.00838.23.1",
    "PL.00007.23.1",
    "PL.00068.23.3",
    "PL.00839.23.1",
    "PL.00840.23.1",
    "PL.00069.23.2",
    "PL.00092.23.2",
    "PL.00841.23.1",
    "PL.00843.23.1",
    "PL.00842.23.1",
    "PL.00054.23.2",
    "PL.00844.23.1",
    "PL.00845.23.1",
    "PL.00187.23.1",
    "PL.00846.23.1",
    "PL.00847.23.1",
    "PL.00849.23.1",
    "PL.00354.23.2",
    "PL.00072.23.1",
    "PL.00850.23.1",
    "PL.00349.23.1",
    "PL.00853.23.1",
    "PL.00854.23.1",
    "PL.00857.23.1",
    "PL.00012.23.1",
    "PL.00108.23.1",
    "PL.00855.23.1",
    "PL.00153.23.1",
    "PL.00856.23.1",
    "PL.00858.23.1",
    "PL.00373.23.1",
    "PL.00860.23.1",
    "PL.00859.23.1",
    "PL.00306.23.2",
    "PL.00868.23.1",
    "PL.00867.23.1",
    "PL.00869.23.1",
    "PL.00866.23.1",
    "PL.00862.23.1",
    "PL.00863.23.1",
    "PL.00186.23.1",
    "PL.00244.23.1",
    "PL.00876.23.1",
    "PL.00044.23.1",
    "PL.00178.23.1",
    "PL.00870.23.1",
    "PL.00233.23.2",
    "PL.00097.23.1",
    "PL.00872.23.1",
    "PL.00874.23.1",
    "PL.00875.23.1",
    "PL.00178.23.2",
    "PL.00873.23.1",
    "PL.00150.23.1",
    "PL.00877.23.1",
    "PL.00878.23.1",
    "PL.00879.23.1",
    "PL.00880.23.1",
    "PL.00881.23.1",
    "PL.00882.23.1",
    "PL.00883.23.1",
    "PL.00341.23.1",
    "PL.00384.23.1",
    "PL.00188.23.2",
    "PL.00884.23.1",
    "PL.00093.23.1",
    "PL.00055.23.1",
    "PL.00885.23.1",
    "PL.00201.23.1",
    "PL.00886.23.1",
    "PL.00887.23.1",
    "PL.00888.23.1",
    "PL.00895.23.1",
    "PL.00889.23.1",
    "PL.00890.23.1",
    "PL.00891.23.1",
    "PL.00154.23.1",
    "PL.00892.23.1",
    "PL.00245.23.1",
    "PL.00154.23.2",
    "PL.00893.23.1",
    "PL.00894.23.1",
    "PL.00896.23.1",
    "PL.00897.23.1",
    "PL.00053.23.1",
    "PL.00898.23.1",
    "PL.00899.23.1",
    "PL.00900.23.1",
    "PL.00902.23.1",
    "PL.00903.23.1",
    "PL.00121.23.1",
    "PL.00904.23.1",
    "PL.00905.23.1",
    "PL.00325.23.2",
    "PL.00217.23.2",
    "PL.00424.23.1",
    "PL.00425.23.1",
    "PL.00383.23.1",
    "PL.00198.23.1",
    "PL.00909.23.1",
    "PL.00912.23.1",
    "PL.00176.23.2",
    "PL.00176.23.3",
    "PL.00913.23.1",
    "PL.00914.23.1",
    "PL.00915.23.1",
    "PL.00368.23.1",
    "PL.00260.23.1",
    "PL.00916.23.1",
    "PL.00921.23.1",
    "PL.00376.23.1",
    "PL.00428.23.1",
    "PL.00918.23.1",
    "PL.00252.23.1",
    "PL.00364.23.1",
    "PL.00922.23.1",
    "PL.00923.23.1",
    "PL.00424.23.2",
    "PL.00060.23.1",
    "PL.00924.23.1",
    "PL.00205.23.1",
    "PL.00925.23.1",
    "PL.00926.23.1",
    "PL.00927.23.1",
    "PL.00431.23.1",
    "PL.00928.23.1",
    "PL.00369.23.1",
    "PL.00930.23.1",
    "PL.00931.23.1",
    "PL.00933.23.1",
    "PL.00362.23.1",
    "PL.00934.23.1",
    "PL.00241.23.1",
    "PL.00257.23.1",
    "PL.00935.23.1",
    "PL.00403.23.1",
    "PL.00362.23.2",
    "PL.00936.23.1",
    "PL.00937.23.1",
    "PL.00938.23.1",
    "PL.00939.23.1",
    "PL.00223.23.1",
    "PL.00940.23.1",
    "PL.00941.23.1",
    "PL.00942.23.1",
    "PL.00943.23.1",
    "PL.00400.23.1",
    "PL.00407.23.1",
    "PL.00864.23.1",
    "PL.00920.23.1",
    "PL.00377.23.1",
    "PL.00944.23.1",
    "PL.00654.23.1",
  ];

  useEffect(() => {
    //session?.user?.email
    //console.log(session?.user);
    //setTransferred(session?.user?.transferStatus);
    const getUserData = async () => {
      const user: any = await getUserByEmail("sarahdunn7430@gmail.com");

      setTransferred(user.transfer_status);
      //setShowButton(true);
    };

    getUserData();
  }, []);

  const openModel = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modalOpen");
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const handleChangeBtn = () => {
    setTransferred(1);
    setShowThankYouModal(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Justice Trading DGCs Redemption and Transfer for Tokens
      </h1>

      <div className="my-8 flex justify-between w-[50%]">
        <div className="w-[270px]">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">
                Transfer To: <br />
                <br />
                KAMASHINANI FOUNDATION,Maua I Ruiri Junction,P.O Box 37-60202
                Nkubu, Meru County, Kenya
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          {transferred === 0 ? (
            <button
              className="border-2 px-4 py-3 my-3 rounded-lg hover:bg-cyan-600 hover:text-white"
              onClick={openModel}
            >
              Convert DGC to tokens and transfer
            </button>
          ) : (
            <p className="text-green-600 font-bold my-4 mr-20">Transferred</p>
          )}
        </div>
      </div>

      {bookletIds
        .reduce<string[][]>((acc, item, index) => {
          // Check if we need to create a new chunk every 3 items
          if (index % 3 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, [])
        .map((chunk, chunkIndex) => (
          <ul key={chunkIndex} className="flex justify-evenly mt-10 space-x-4">
            {chunk.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        ))}

      {/* <ul className="flex justify-evenly mt-10">
        {bookletIds.map((items) => (
          <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <span className="text-lg">{items}</span>
          </li>
        ))}
      </ul> */}

      <ul className="flex justify-evenly mt-10">
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00012.19.1</span>
        </li>
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00008.19.1</span>
        </li>
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg">PL00008.19.1</span>
        </li>
      </ul>

      <div className="models">
        {showModal && (
          <ModalSplitCommission
            closeModal={closeModal}
            changeBtn={handleChangeBtn}
          />
        )}
        {showThankYouModal && <ThankyouModal closeModal={closeThankYouModal} />}
      </div>
    </div>
  );
}
