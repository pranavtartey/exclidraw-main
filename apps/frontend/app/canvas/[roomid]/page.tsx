import RoomCanvas from "@/components/RoomCanvas";

const CanvasPage = async ({ params }: { params: { roomid: string } }) => {
  const roomId = await params.roomid;
  console.log("This is the room ID : ", roomId);
  return <RoomCanvas roomId={roomId} />;
};

export default CanvasPage;
