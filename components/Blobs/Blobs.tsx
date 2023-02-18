import BlobAnimated from "@/components/BlobAnimated/BlobAnimated";
import BlobSmall from "../BlobSmall/BlobSmall";
import classnames from "classnames";
import { Blob1 } from "@/icons/Blob1";
import { Blob2 } from "@/icons/Blob2";
import { Blob3 } from "@/icons/Blob3";
import { Blob4 } from "@/icons/Blob4";
import { Blob5 } from "@/icons/Blob5";
import { Blob6 } from "@/icons/Blob6";
import { Blob7 } from "@/icons/Blob7";
import { Blob8 } from "@/icons/Blob8";
import s from "./Blobs.module.css";

export default function Blobs() {
  return (
    <section className={s.blobsSection}>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob1 />
          </BlobAnimated>
          <a className={s.link} href="/blurredvision">
            BLURRED VISION
          </a>
        </div>
        <BlobSmall top={"55%"} left={"-10%"} size={"l"}>
          <Blob5 />
        </BlobSmall>
        <BlobSmall bottom={"25%"} left={"-5%"} size={"m"}>
          <Blob7 />
        </BlobSmall>
        <BlobSmall bottom={"5%"} right={"12%"} size={"s"}>
          <Blob8 />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.left)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob2 />
          </BlobAnimated>
          <a className={s.link} href="/tremor">
            TREMOR
          </a>
        </div>
        <BlobSmall top={"10%"} right={"15%"} size={"s"}>
          <Blob5 />
        </BlobSmall>
        <BlobSmall bottom={"15%"} right={"5%"} size={"s"}>
          <Blob7 />
        </BlobSmall>
        <BlobSmall bottom={"0%"} right={"5%"} size={"l"}>
          <Blob8 />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob3 />
          </BlobAnimated>
          <a className={s.link} href="/blindness">
            BLINDNESS
          </a>
        </div>
        <BlobSmall top={"35%"} left={"-15%"} size={"xl"}>
          <Blob1 />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.left)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob4 />
          </BlobAnimated>
          <a className={s.link} href="/dyslexia">
            DYSLEXIA
          </a>
        </div>
        <BlobSmall top={"-12%"} left={"30%"} size={"s"}>
          <Blob6 />
        </BlobSmall>
        <BlobSmall top={"-10%"} left={"35%"} size={"l"}>
          <Blob1 />
        </BlobSmall>
        <BlobSmall top={"-5%"} left={"28%"} size={"m"}>
          <Blob8 />
        </BlobSmall>
        <BlobSmall top={"35%"} right={"0%"} size={"s"}>
          <Blob5 />
        </BlobSmall>
        <BlobSmall top={"40%"} right={"-5%"} size={"m"}>
          <Blob7 />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob6 />
          </BlobAnimated>
          <a className={s.link} href="/colourblindness">
            COLOUR BLINDNESS
          </a>
        </div>
        <BlobSmall top={"-2%"} right={"40%"} size={"s"}>
          <Blob5 />
        </BlobSmall>
        <BlobSmall top={"0%"} right={"25%"} size={"l"}>
          <Blob7 />
        </BlobSmall>
        <BlobSmall top={"-10%"} right={"30%"} size={"m"}>
          <Blob8 />
        </BlobSmall>
        <BlobSmall top={"20%"} left={"-5%"} size={"s"}>
          <Blob1 />
        </BlobSmall>
        <BlobSmall top={"40%"} left={"-15%"} size={"s"}>
          <Blob8 />
        </BlobSmall>
        <BlobSmall top={"45%"} left={"-20%"} size={"m"}>
          <Blob5 />
        </BlobSmall>
        <BlobSmall bottom={"20%"} left={"-5%"} size={"xl"}>
          <Blob7 />
        </BlobSmall>
      </div>
    </section>
  );
}
