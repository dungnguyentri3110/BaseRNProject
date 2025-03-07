import {
  getListMusicError,
  getListMusicSuccess,
  increment,
} from '../../data/locals/redux/features/home/listMusicSlice';
import {useAppDispatch} from '../../data/locals/redux/hooks';
import {MusicModel} from '../../data/models/MusicModel';
import {BaseResponse, HttpStatus} from '../../data/remotes/ApiManager';
import HomeRepositories from '../../data/repositories/HomeRepositories';

export const useHomeController = () => {
  const dispatch = useAppDispatch();

  const getListMusic = async () => {
    try {
      const response: BaseResponse<MusicModel[]> =
        await HomeRepositories.getListMusic<MusicModel[]>();
      console.log('Ressssss: ', response);
      if (response.status === HttpStatus.SUCCESS) {
        if (response.data?.code === HttpStatus.SUCCESS) {
          setTimeout(() => {
            dispatch(getListMusicSuccess(response.data!));
          }, 3000);
        } else {
          dispatch(getListMusicError(response.data!));
        }
      }
    } catch (error) {
      console.log('Request Error: ', error);
    }
  };

  const incrementCount = () => {
    dispatch(increment());
  };

  return {getListMusic, incrementCount};
};
