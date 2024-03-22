import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section>
      <div>
        <h1 className="w-full py-2 px-4 text-2xl font-bold">FAQ</h1>
        <Accordion title="Do you rate us" content="Yes!. I highly rate your services" />
        <Accordion
          title="Why did you choose the answer above"
          content="Because you are the best"
        />
        <Accordion
          title="Thank you for your response"
          content="you are highly welcomed"
        />
        <Accordion
          title="You can find our social media links below"
          content="Dont worry. Am already following you on all your handles"
        />
      </div>
    </section>
  );
};
export default FAQ;
