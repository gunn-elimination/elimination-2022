export default function About() {
  return (
    <div className="flex flex-col w-full h-full px-10 py-8 overflow-auto bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-8 text-3xl font-bold">About</h1>
      <div className={"flex flex-col"}>
        <div className="prose-sm prose box max-w-none dark:prose-invert">
          <h2 className="mb-3 text-lg font-semibold">Rules</h2>
          <details>
            <summary className={"cursor-pointer"}>
              Click to expand rules
            </summary>
            <ol>
              <li>
                At the beginning of the game (3/1/22 12AM), each player will be
                assigned another player (target). Your mission is to eliminate
                your target by tagging them with a miniature stuffed plushie.
                After you eliminate your first target, you will get assigned
                your target's target. Eliminations are only valid under certain
                circumstances (see below). The game will end on 3/31 11:59 PM
                and whoever has the most eliminations by then wins!
              </li>
              <li>You MUST enter your real name when you join the game</li>
              <li>The plushie MUST be visible at all times </li>
              <li>
                You cannot be eliminated during a class period when you are
                marked present to that class and the bell has rung.
              </li>
              <li>
                You are still safe if you exit the class (e.g. going to the
                bathroom)
              </li>
              <li>You are not safe during a prep period</li>
              <li>You can tag in a classroom before or after class</li>
              <li>
                If a teacher wants absolutely no elimination in their classroom
                you must obey their wish. Teachers can report students, and you
                will be disqualified.{" "}
              </li>
              <li>You cannot be eliminated while you are playing a sport</li>
              <li>
                This includes sports not affiliated with Gunn (i.e. playing
                basketball or working out)
              </li>
              <li>
                You cannot be eliminated until after you have exited the
                athletic facility.{" "}
              </li>
              <li>You are safe while in the locker room</li>
              <li>
                You cannot be eliminated in the shower or in a stall or using
                the restroom
              </li>
              <li>
                You cannot be eliminated while driving a car or riding a bike
              </li>
              <li>
                You cannot be eliminated during Prime and while checked into a
                classroom or marked present, even if you are going to the
                bathroom.
              </li>
              <li>
                You cannot be eliminated while making up work for a teacher,
                even if not during Office Hours/Prime or class times.
              </li>
              <li>You cannot be eliminated in the TRC</li>
              <li>You can be eliminated while tutoring in the AC</li>
              <li>
                You cannot be eliminated while performing school-related
                after-school activities (i.e. theater, GRT etc.). If you leave
                to go to the bathroom, etc. you are still safe
              </li>
              <li>This also includes a school dance</li>
              <li>
                You cannot be eliminated while participating in any
                extracurricular activities (including rehearsals, performances,
                classes, competitions, or practices). You are safe until the
                venue is entirely over. You can be tagged before the
                extracurricular starts or after it ends.{" "}
              </li>
              <li>
                You are safe when you are working (if you have a part-time job)
              </li>
              <li>You can be eliminated during a lunchtime club. </li>
              <li>
                Any participants and performers in a lunchtime rally are safe
                for the entire duration of the rally.
              </li>
              <li>
                If you are in the audience, you can be eliminated at the rally.
              </li>
              <li>
                You cannot throw the plushie in order to tag someone; you must
                tap the other person lightly
              </li>
              <li>You cannot own more than one plushie</li>
              <li>
                You cannot be eliminated while you are taking any type of school
                related assessments
              </li>
              <li>You cannot steal each other’s plushie</li>
              <li>
                You are not allowed to be tagged after having the plushie taken
                from you by force. If you have given the plushie to someone else
                by choice, you can be tagged
              </li>
              <li>You can get eliminated after school and on the weekends</li>
              <li>
                After you eliminate someone, enter the target’s pin number into
                the site to receive your next target
              </li>
              <li>
                You cannot tie the plushie to your hand or attach anything to
                the plushie
              </li>
              <li>
                Rules will change and become more intense over the course of the
                game
              </li>
              <li>NO BREAKING THE LAW</li>
              <li>
                AS OF MIDNIGHT 03/01/2022 - Players must hold the plushie and
                the game begins!
              </li>
            </ol>
          </details>
          <details>
            <summary className={"cursor-pointer"}>
              Click to expand Calendar (3/1/22 12AM - 3/31/22 11:59 PM) (Day, Rule)
            </summary>
            <ol>
              <li>
                Game officially starts at 12:00 AM, Plushie must be held in
                right hand.
              </li>
              <li>Plushie must be held in left hand.</li>
              <li>Plushie must be held in right hand.</li>
              <li>Plushie must be held in left hand.</li>
              <li>Plushie must be held in either hand</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>Plushie must be held in both hands</li>
              <li>Plushie must be attatched to arm.</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>Plushie must be above shoulder</li>
              <li>Players must be below the waist</li>
              <li>Plushie must be held in either hand</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>Players must wear red</li>
              <li>Players must wear pink</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>Players must wear green</li>
              <li>Players must wear orange</li>
              <li>Plushie must be held in either hand</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>Players must be under a roof or overhang</li>
              <li>Players must be holding plushie in both hands</li>
              <li>
                Targets change at 8:00PM;Plushie must be held in either hand
              </li>
              <li>
                Plushie must be touching shoulder of player who is holding it
              </li>
              <li>Player must be wearing a hat</li>
              <li>Plushie must be held in either hand</li>
              <li>
                FINAL Targets change at 8:00PM;Plushie must be held in either
                hand
              </li>
              <li>
                Plushie must be touching shoulder of player who is holding it
              </li>
              <li>Players must be wearing a hat</li>
              <li>Plushie must be touching wall (no poles)</li>
              <li>Nobody is safe</li>
              <li>
                The player with the most people eliminated and is still alive
                WINS
              </li>
            </ol>
          </details>
        </div>
      </div>
    </div>
  );
}
