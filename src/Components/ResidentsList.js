import React from 'react';

function ResidentsList({students}) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{
					 students.map((t) => (
						<li key={t.id} className="slide-up-fade-in" >
					         {t.value}
				       </li>
					))
				}
			</ul>
		</div>
	); 
}

export default ResidentsList


