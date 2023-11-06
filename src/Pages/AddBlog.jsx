import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
// import { toast } from 'react-hot-toast';
const AddBlog = () => {
  //   const [title, setTitle] = useState("");
  //   const [imgUrl, setImgUrl] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [shortDes, setShortDes] = useState("");
  //   const [longDes, setLongDes] = useState("");

  const handleBlogPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imgUrl = form.imgUrl.value;
    const category = form.category.value;
    const shortDes = form.shortDes.value;
    const longDes = form.longDes.value;
    const currentTime = new Date();
   const timestamp = currentTime.toLocaleString();
    const addPost = {
      title,
      imgUrl,
      category,
      shortDes,
      longDes,
      timestamp
    };
    console.log(addPost);
  };

  return (
    <div className="lg:my-10 lg:mx-20 mx-5 my-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-between">
        <div className="lg:col-span-3">
          <form onSubmit={handleBlogPost} className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-full">
                <div className="mb-2 block ">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                  name="title"
                  type="text"
                  placeholder="Enter post title"
                  required
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="imgUrl" value="Post Photo Url" />
                </div>
                <TextInput
                  id=""
                  name="imgUrl"
                  type="text"
                  placeholder="Photo Url"
                  required
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Select your Category" />
                </div>
                <Select name="category" id="countries" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Short Description" />
              </div>
              <Textarea
                id="comment"
                placeholder="Short Description"
                name="shortDes"
                required
                rows={4}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Long Description" />
              </div>
              <Textarea
                id="comment"
                placeholder="Long description"
                name="longDes"
                required
                rows={4}
              />
            </div>

            <Button type="submit">Create Post</Button>
          </form>
        </div>
        <div className="lg:col-span-1 bg-[#0e7490] p-10">
          <h1 className="text-3xl font-bold text-center">Write your post</h1>
          <p className=" mt-5 text-justify">
            In this example, we have a BlogPost component that displays the
            title of the blog post, an image with a caption, and leaves space
            for the rest of the blog post content. You can add the actual
            content of your blog post after the caption, such as the
            ingredients, instructions, and any other details you want to include
            in your blog post.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
