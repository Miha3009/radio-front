const ProgramSchedule = ({className, title, programList}) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            {programList.map(program => 
                <p key={program.time}><strong>{program.time}</strong>  {program.name}</p>
            )}
        </div>
    );
}

export default ProgramSchedule;