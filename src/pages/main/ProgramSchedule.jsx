import { observer } from "mobx-react-lite";
import { Stack } from "react-bootstrap";
import channelStore from "store/channelStore";

const ProgramSchedule = () => {
    return (
        <Stack direction="horizontal" className="bg-light rounded align-items-start justify-content-between">
            <ProgramSchedulePart title="История эфира" programs={channelStore.current.programPrev}/>
            <div className="vr" />
            <ProgramSchedulePart title="Далее в эфире" programs={channelStore.current.programNext}/>
        </Stack>
    );
}

const ProgramSchedulePart = ({ title, programs }) => {
    if (!programs) {
        return <></>
    }

    return (
        <div className="mx-auto my-1">
            <h4><b>{title}</b></h4>
            {programs.map(program =>
                <p key={program.time}>
                    <b>{program.time}</b>
                    &nbsp;
                    {program.name}
                </p>
            )}
        </div>
    )
}

export default observer(ProgramSchedule);