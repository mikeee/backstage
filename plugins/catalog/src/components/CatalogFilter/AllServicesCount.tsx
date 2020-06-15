/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { useApi } from '@backstage/core';
import { catalogApiRef } from '../../api/types';
import { useAsync } from 'react-use';
import { CircularProgress, useTheme } from '@material-ui/core';

export const AllServicesCount: FC<{}> = () => {
  const theme = useTheme();
  const catalogApi = useApi(catalogApiRef);
  const { value, loading } = useAsync(() => catalogApi.getEntities());

  if (loading) {
    return <CircularProgress size={theme.spacing(2)} />;
  }

  return <span>{value ?? length ?? '-'}</span>;
};
