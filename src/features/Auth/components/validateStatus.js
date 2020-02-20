export default function (touched, errors) {
   if (touched) {
      if (errors) {
         return "error";
      } else {
         return "success";
      }
   } else {
      return "";
   }
};