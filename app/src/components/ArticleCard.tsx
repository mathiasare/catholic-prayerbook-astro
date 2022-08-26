import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  interface ArticleCardProps{
    heading:string,
    content:string
    imagePath:string | undefined
  }
   
  export default function ArticleCard(props:ArticleCardProps) {
    let imageHeader = null;

    if(props.imagePath !== null || props.imagePath !== ""){
      imageHeader = (
        <CardHeader color="blue" className="relative h-56">
        <img
          src={props.imagePath}
          alt=""
          className="h-full w-full"
        />
        </CardHeader>
      )
    }

    return (
      (
        <Card className="w-96">
          <CardHeader color="blue" className="relative h-56">
            <img
              src={props.imagePath}
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {props.heading}
            </Typography>
            <Typography>
              {props.content}
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small"></Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            </Typography>
          </CardFooter>
        </Card>
      ));
  }