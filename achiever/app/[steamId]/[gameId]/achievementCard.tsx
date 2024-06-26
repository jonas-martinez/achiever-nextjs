export default async function AchievementCard({ achievement }: any) {
    return (
        <div className="avatar tooltip" data-tip={achievement.description}>
            <div className={`${achievement.achieved == 1 ? '' : 'grayscale'} ring-secondary ring-offset-base-100 w-24 rounded-full ring ring-offset-2`}>
                <img src={achievement.icon} />
            </div>
        </div>
    );
}