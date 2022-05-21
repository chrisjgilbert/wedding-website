import styles from "../styles/components/OnTheDay.module.css";

export default function OnTheDay() {
  return (
    <div className={styles.detailsContainer}>
      <h6>03.09.2022</h6>
      <h2>Wedding details</h2>
      <dl className={styles.detailsList}>
        <dt>Arriving at La Bastide de Marie</dt>
        <dd>
          As you arrive at La Bastide de Marie, off the D3, you will drive down
          a short track to an automated gate which will open for you. There is
          parking as you enter on the right hand side.
        </dd>

        <dt>Welcome Dinner</dt>
        <dd>
          For anyone who will be in the Luberon on Friday 2nd September, we
          would love you to join us for a welcome dinner at La Bastide de Marie
          at 6pm.
        </dd>

        <dt>Order of the Day</dt>
        <dd>
          Please arrive by four o’clock at the latest as our blessing will take
          place in the gardens of the Bastide on Saturday 3rd September 2022 at
          half past four in the afternoon.
          <br />
          <br />
          This will be followed by a drinks reception in the garden, speeches,
          dinner and dancing. The party will finish at around 1am.
        </dd>

        <dt>Dress Code</dt>
        <dd>
          Black Tie or Smart Summer Suits.
          <br />
          <br />
          Chris will be wearing Black Tie but we appreciate that some of you
          might be more comfortable in a summer suit.
          <br />
          <br />
          Please be warned that although the weather is often very warm in the
          day, as the sun goes down the temperature most definitely drops. We
          are planning - weather permitting - for all of the day to take place
          outside so please bring a warm layer.
        </dd>

        <dt>Dietary Requirements</dt>
        <dd>
          Please let us know of any allergies or food intolerances and we will
          of course cater for these.
        </dd>

        <dt>Taxi’s</dt>
        <dd>
          We would highly recommend booking a taxi’s in advance. Please contact
          us for recommendations.
        </dd>

        <dt>Contact Details</dt>
        <dd>
          Should you have any issues on the day, please feel free to contact one
          of the esteemed best men - James Nott or Phil Anscombe.
          <br />
          <br />
          Contact details will be made available closer to the time.
        </dd>

        <dt>Wedding List</dt>
        <dd>
          It goes without saying that your prescence celebrating this special
          with us is enough of a gift (a little cringe but very true). However,
          we do have a lift at the Conran Shop which can be found{" "}
          <a
            href="wedding-list.pdf"
            target="_blank"
            className={styles.weddingListLink}
          >
            here
          </a>
          .
        </dd>
      </dl>
    </div>
  );
}
