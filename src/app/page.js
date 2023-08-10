"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwner Name="Thanathorn" LastN = "Taewattanapanit" Code="650610770"/>

        <Comment userImagePath = "/profileImages/Lisa.jpg" username = "Lisa" commentText = "จริงค่า" likeNum = "999"/>
      

        <Reply userImagePath = "/profileImages/puppy.jpg" username="หมาน้อย" replyText = "จริงค้าบบบบบบบ" likeNum = "2"/>
        

        
      </div>
    </div>
  );
}
